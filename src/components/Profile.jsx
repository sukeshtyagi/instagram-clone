import React, { useState } from "react";
import style from "../style/Profile.module.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faPlus } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [showPTags, setShowPTags] = useState(true);
  const updateShowPTags = (newValue) => {
    setShowPTags(newValue);
  };

  return (
    <div className={style.outerContainer}>
      <Navbar showPTags={showPTags} updateShowPTags={updateShowPTags} />

      <div className={style.profileContainer}>
        <div className={style.headerDiv}>
          <div className={style.userDiv}>
            <div className={style.profileIcon}>
              <FontAwesomeIcon icon={faUser} />
            </div>

            <div className={style.detailsDiv}>
              <div className={style.detailsTopDiv}>
                <p>sukeshtyagi05</p>
                <button className={style.editButton}>Edit Profile</button>
                <button className={style.viewArchieveButton}>
                  View Archieve
                </button>
                <FontAwesomeIcon icon={faGear} />
              </div>

              <div className={style.detailsMiddleDiv}>
                <div className={style.postsContainer}>
                  <p>
                    <span>1</span>
                  </p>
                  <p>posts</p>
                </div>
                <div className={style.followersContainer}>
                  <p>
                    <span>2</span>
                  </p>
                  <p>followers</p>
                </div>
                <div className={style.followingContainer}>
                  <p>
                    <span>3</span>
                  </p>
                  <p>following</p>
                </div>
              </div>

              <div className={style.detailsBottomDiv}>
                <p>Sukesh Tyagi</p>
              </div>
            </div>
          </div>

          <div className={style.newDiv}>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <p>New</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
