import React, { useRef, useEffect } from "react";
import style from "../style/Navbar.module.css";
import { NavLink } from "react-router-dom";
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

function Navbar({ toggleBottomSheet }) {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(event.target)
      ) {
        toggleBottomSheet();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleBottomSheet]);

  return (
    <div className={style.sideBarDiv} ref={bottomSheetRef}>
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
          <NavLink to="" className={style.navlink}>
            <p>More</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
