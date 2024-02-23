import React from "react";
import style from "../style/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

import {
  faHeart,
  faVideo,
  faCompass,
  faHouse,
  faMagnifyingGlass,
  faSquarePlus,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.sideBarDiv}>
        <img src="/images/instalogo.jpeg" alt="instagram logo" />
        <div className={style.menuList}>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Search</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faCompass} />
            <p>Explore</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faVideo} />
            <p>Reels</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faFacebookMessenger} />
            <p>Messages</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faHeart} />
            <p>Notifications</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faSquarePlus} />
            <p>Create</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faUser} />
            <p>Profile</p>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faBars} />
            <p>More</p>
          </div>
        </div>
      </div>

      <div className={style.mainDiv}>Main page </div>
    </div>
  );
}

export default Home;
