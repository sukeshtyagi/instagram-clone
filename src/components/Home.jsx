import React, { useState, useEffect } from "react";
import style from "../style/Home.module.css";
import { NavLink } from "react-router-dom";
import BottomSheet from "./Bottomsheet";
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
function Home() {
  const [data, setData] = useState(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:4000/data";
      try {
        const response = await fetch(url);
        if (response.ok) {
          const serverData = await response.json();
          console.log("data received from server", serverData);
          setData(serverData);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    getData();
    console.log(data);
  }, []);

  const toggleBottomSheet = () => {
    setShowBottomSheet(!showBottomSheet);
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.sideBarDiv}>
        <NavLink to="/home">
          <FontAwesomeIcon icon={faInstagram} className={style.sideBarIcon} />
        </NavLink>
        <div className={style.menuList}>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faHouse} />
            <NavLink to="/home" className={style.navlink}>
              <p>Home </p>
            </NavLink>
          </div>

          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <NavLink to="/search" className={style.navlink}>
              <p>Search </p>
            </NavLink>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faCompass} />
            <NavLink to="/explore" className={style.navlink}>
              <p>Explore </p>
            </NavLink>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faVideo} />
            <NavLink to="/reels" className={style.navlink}>
              <p>Reels </p>
            </NavLink>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faFacebookMessenger} />
            <NavLink to="/message" className={style.navlink}>
              <p>Message </p>
            </NavLink>
          </div>
          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faHeart} />
            <NavLink to="/notification" className={style.navlink}>
              <p>Notification </p>
            </NavLink>
          </div>

          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faSquarePlus} />
            <NavLink to="/Create" className={style.navlink}>
              <p>Create </p>
            </NavLink>
          </div>

          <div className={style.menuItem}>
            <FontAwesomeIcon icon={faUser} />
            <NavLink to="/profile" className={style.navlink}>
              <p>Profile </p>
            </NavLink>
          </div>

          <div className={style.menuItem} onClick={toggleBottomSheet}>
            <FontAwesomeIcon icon={faBars} />
            <p>More</p>
          </div>
        </div>
      </div>

      <div className={style.mainDiv}>
        <h3>Suggested for you</h3>

        {data &&
          data.map((item) => (
            <div key={item.id} className={style.cardDiv}>
              <div className={style.allDetailsDiv}>
                <img src={item.image} alt="" />
                <div className={style.detailsDiv}>
                  <h6>{item.username}</h6>
                  <p>{item.name}</p>
                  <p>{item.reason}</p>
                </div>
              </div>

              <button className={style.followBtn}>Follow</button>
            </div>
          ))}
      </div>
      <BottomSheet show={showBottomSheet} onHide={toggleBottomSheet} />
    </div>
  );
}

export default Home;
