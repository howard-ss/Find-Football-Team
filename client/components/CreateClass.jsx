import React, { Component, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "./ContextProvider";
import axios from "axios";

function CreateClass() {
  const { currentSchool_id } = useContext(AppContext);

  const onSubmit = (values) => {
    const data = {
      class_name: values.class_name,
      subject: values.subject,
      school_id: currentSchool_id,
    };

    axios
      .post("http://localhost:3000/api/classes", data)
      .then((res) => console.log(res));
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="classForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input name="class_name" placeholder="class Name" ref={register} />

        <label>Subject</label>
        <input name="subject" placeholder="Subject" ref={register} />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default CreateClass;
