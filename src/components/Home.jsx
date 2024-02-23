import React from "react";
import style from "../style/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
import data from "../data.json";

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.sideBarDiv}>
        <FontAwesomeIcon icon={faInstagram} className={style.sideBarIcon} />
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

      <div className={style.mainDiv}>
        <h3>Suggested for you</h3>

        <div className={style.cardDiv}>
          <div className={style.allDetailsDiv}>
            <img
              src="https://wallpapers.com/images/hd/abdul-kalam-hd-scientist-and-statesman-639ry6vs4optonvd.jpg"
              alt=""
            />
            <div className={style.detailsDiv}>
              <h6>@missile_man</h6>
              <p>Sh APJ Abdul Kalam</p>
              <p>Popular</p>
            </div>
          </div>

          <button className={style.followBtn}>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

/*
<div className={style.mainDiv}>
        <h3>Suggested for you</h3>
        <div className={style.cardDiv}>
          <div className={style.allDetailsDiv}>
            <img
              src="https://wallpapers.com/images/hd/abdul-kalam-hd-scientist-and-statesman-639ry6vs4optonvd.jpg"
              alt=""
            />
            <div className={style.detailsDiv}>
              <h6>@missile_man</h6>
              <p>Sh APJ Abdul Kalam</p>
              <p>Popular</p>
            </div>
          </div>

          <button className={style.followBtn}>Follow</button>
        </div>
*/
