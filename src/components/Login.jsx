import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "../style/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Login({
  showLogin,
  toggleLogin,
  newUser,
  usedFor,
  subtext,
  subtextStyle,
  fbSignUpDivStyle,
  signUpDetailsStyle,
  signInDivStyle,
}) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className={`${style.outerDiv} ${newUser ? style.noBorder : ""}`}>
      <div className={style.loginDiv}>
        {newUser && (
          <FontAwesomeIcon
            icon={faXmark}
            className={style.newUserLoginCancel}
            onClick={toggleLogin}
          />
        )}
        <img src="/images/instalogo.jpeg" alt="instagram logo" />
        {subtext && <h4 className={subtextStyle}>{subtext}</h4>}
        {!usedFor && (
          <div className={style.loginDetails}>
            <input
              type="text"
              name=""
              placeholder="Phone number, username or email addess"
            />
            <input type="text" name="" placeholder="Password" />
            <button onClick={handleLogin}>Log IN</button>
          </div>
        )}

        {usedFor && (
          <NavLink className={style.navlink}>
            <div className={fbSignUpDivStyle}>
              <button>
                <img src="/images/fblogo.avif" alt="fb logo" />
                <p>Log in with Facebook</p>
              </button>
            </div>
          </NavLink>
        )}

        {!newUser && (
          <div className={style.segregationDiv}>
            <div className={style.emptyDiv}></div>
            <div className={style.textDiv}>OR</div>
            <div className={style.emptyDiv}></div>
          </div>
        )}

        {!usedFor && !newUser && (
          <>
            <div className={style.optionDiv}>
              <NavLink className={style.navlink}>
                <button>
                  <img src="/images/fblogo.avif" alt="fb logo" />
                  <p>Log in with Facebook</p>
                </button>
              </NavLink>
            </div>
            <p>Forgotten your password?</p>
          </>
        )}

        {newUser && (
          <div className={style.newUserOptionDiv}>
            <p>Forgotten your password?</p>
          </div>
        )}

        {usedFor && (
          <div className={signUpDetailsStyle}>
            <input
              type="text"
              name=""
              placeholder="Phone number or email addess"
            />

            <input type="text" name="" placeholder="Full Name" />

            <input type="text" name="" placeholder="username" />

            <input type="text" name="" placeholder="Password" />

            <p>
              People who use our sevice may have uploaded your contact
              information to instagram.{" "}
              <NavLink className={style.navlink}>Learn more</NavLink>
            </p>

            <p>
              By signing up you agree to our{" "}
              <NavLink className={style.navlink}>Terms,Privacy Policy</NavLink>{" "}
              and <NavLink className={style.navlink}>Cookies Policy</NavLink>
            </p>

            <button onClick={handleLogin}>Sign Up</button>
          </div>
        )}
      </div>

      {!usedFor && !newUser && (
        <div className={style.signInDiv}>
          <p>
            Don't have an account?{" "}
            <NavLink className={style.navlink} to="/sign">
              Sign Up
            </NavLink>
          </p>
        </div>
      )}

      {usedFor && (
        <div className={signInDivStyle}>
          <p>
            Have an account?{" "}
            <NavLink className={style.navlink} to="/">
              Log in
            </NavLink>
          </p>
        </div>
      )}

      {!newUser && (
        <div className={style.appDiv}>
          <p>Get the App</p>
          <div className={style.appDownloadDiv}>
            <img src="/images/appstore.png" alt="get from app store" />
            <img src="/images/playstore.png" alt="get from google play" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
