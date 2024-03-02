import React from "react";
import Login from "./Login";

function AnotherLogin({ showLogin, toggleLogin }) {
  return (
    <Login newUser="newUser" showLogin={showLogin} toggleLogin={toggleLogin} />
  );
}

export default AnotherLogin;
