import React from "react";
import Login from "./Login";
import style from "../style/AnotherLogin.module.css";

function AnotherLogin({ showLogin, toggleLogin }) {
  return (
    <Login newUser="newUser" showLogin={showLogin} toggleLogin={toggleLogin} />
  );
}

export default AnotherLogin;
