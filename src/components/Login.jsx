import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/Login.module.css";

function Login() {
  return (
    <div className={style.outerDiv}>
      <div className={style.loginDiv}>
        <img src="/images/instalogo.jpeg" alt="instagram logo" />
        <div className={style.loginDetails}>
          <input
            type="text"
            name=""
            placeholder="Phone number, username or email addess"
          />
          <input type="text" name="" placeholder="Password" />
          <button>Log IN</button>
        </div>
        <div className={style.segregationDiv}>
          <div className={style.emptyDiv}></div>
          <p>OR</p>
          <div className={style.emptyDiv}></div>
        </div>
        <NavLink>
          <div className={style.optionDiv}>
            <img src="/images/fblogo.avif" alt="fb logo" />
            <p>Log in with Facebook</p>
          </div>
        </NavLink>
        <p>Forgotten your password?</p>
      </div>
      <div className={style.signInDiv}>
        <p>
          Don't have an account? <NavLink to='/sign'>Sign Up</NavLink>
        </p>
      </div>
      <div className={style.appDiv}>
        <p>Get the App</p>
        <div className={style.appDownloadDiv}>
          <img src="/images/appstore.png" alt="get from app store" />
          <img src="/images/playstore.png" alt="get from google play" />
        </div>
      </div>
    </div>
  );
}

export default Login;
