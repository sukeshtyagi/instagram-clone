import React from "react";
import Login from "./Login";
import style from "../style/SignUp.module.css";

function SignUp() {
  return (
    <Login
      usedFor="signUp"
      subtext="Sign up to see photos and videos from your friends."
      subtextStyle={style.subtext}
      fbSignUpDivStyle={style.fbSignUpDiv}
      signUpDetailsStyle={style.signUpDetails}
      signInDivStyle={style.signInDiv}
    />
  );
}

export default SignUp;
