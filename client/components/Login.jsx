import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppContext } from "./ContextProvider";
import axios from "axios";

function Login(props) {
  const { user, setCurrentUser } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values)
    axios(
      `http://localhost:3000/api/users/auth/${values.user_name}/${values.user_password}`
    ).then((res) => {
      
      if (res.data.length > 0) {
        setCurrentUser(res.data[0]);
        props.history.push('/homepage')
      } else {
        alert("Wrong username or password entered");
      }
    });
  };

  return (
    <div className="loginPage">
      <img
        className="loginBg"
        src="/football.webp"
        width="500"
        height="350"
      ></img>

      <div className="loginForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input name="user_name" ref={register} />

          <label>Password</label>
          <input name="user_password" type="password" ref={register} />

          <div className="submitBtn">
            <input className = "generic_button" type="submit"></input>
          </div>
        </form>
        Not registered?
        <br/>
        <br/>
        <Link className = "signup_link" to="/signup"><strong>Create an Account</strong></Link>
        <br/>
        <br/>
        <Link className = "signup_link" to="/homepage"><strong>Continue as Guest</strong> </Link>
      </div>
    </div>
  );
}

export default Login;
