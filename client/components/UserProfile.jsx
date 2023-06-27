import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./ContextProvider";


function Userpage() {
  const { user } = useContext(AppContext);

  //grab fname, lname
  const [name, updateName] = useState("John Smith");
  const [location, updateLocation] = useState("Los Angeles, CA");
  const [contact, updateContact] = useState("jsmith@google.com");
  // const [bio, updateBio] = useState('')

  return (
    <div className="userProfile">
      <img className="profilePic" src="/TEAM-SPIRIT.jpg"></img>
      <pre>
        <div className="displayName">{user.user_name}</div>
        <div className="name">
          Name {user.first_name} {user.last_name}
        </div>
        <div className="location">Location {user.user_location}</div>
        <div className="contact">Contact {user.user_email}</div>
        <div className="bio">About Team-Spirit: I am a full stack developer.</div>
      </pre>

      {/* set edit button here? */}
    </div>
  );
}


export default Userpage;
