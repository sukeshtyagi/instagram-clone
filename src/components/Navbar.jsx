import React, { useRef, useEffect, useState } from "react";
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

function Navbar({ toggleBottomSheet, usedIn }) {
  const bottomSheetRef = useRef(null);
  const [showPTags, setShowPTags] = useState(true);

  const [instaIconPaddingLeft, setInstaIconPaddingLeft] = useState("20px");

  const [sideBarDivPaddingRight, setSideBarDivPaddingRight] = useState("60px");

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

  const handleSearchClick = () => {
    setShowPTags(!showPTags);
    setInstaIconPaddingLeft(showPTags ? "0px" : "20px");
    setSideBarDivPaddingRight(showPTags ? "0px" : "20px");
  };

  const handleNavLinkClick = () => {
    setShowPTags(true);
  };

  return (
    <div
      className={style.sideBarDiv}
      ref={bottomSheetRef}
      style={{
        paddingRight: sideBarDivPaddingRight,
      }}
    >
      <NavLink to="/home">
        <FontAwesomeIcon
          onClick={handleNavLinkClick}
          icon={faInstagram}
          className={style.sideBarIcon}
          style={{
            paddingLeft: instaIconPaddingLeft,
          }}
        />
      </NavLink>
      <div className={style.menuList}>
        <div className={style.menuItem}>
          <FontAwesomeIcon onClick={handleNavLinkClick} icon={faHouse} />
          <NavLink to="/home" className={style.navlink}>
            {showPTags && <p>Home</p>}
          </NavLink>
        </div>

        <div className={style.menuItem} onClick={handleSearchClick}>
          <FontAwesomeIcon
            onClick={handleNavLinkClick}
            icon={faMagnifyingGlass}
          />
          <NavLink to="" className={style.navlink}>
            {showPTags && <p>Search</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <FontAwesomeIcon onClick={handleNavLinkClick} icon={faCompass} />
          <NavLink to="/explore" className={style.navlink}>
            {showPTags && <p>Explore</p>}
          </NavLink>
        </div>
        <div className={style.menuItem}>
          <FontAwesomeIcon onClick={handleNavLinkClick} icon={faVideo} />
          <NavLink to="/reels" className={style.navlink}>
            {showPTags && <p>Reels</p>}
          </NavLink>
        </div>
        <div className={style.menuItem}>
          <FontAwesomeIcon
            icon={faFacebookMessenger}
          />
          <NavLink to="/message" className={style.navlink}>
            {showPTags && <p>Message</p>}
          </NavLink>
        </div>
        <div className={style.menuItem}>
          <FontAwesomeIcon icon={faHeart} />
          <NavLink to="/notification" className={style.navlink}>
            {showPTags && <p>Notification</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <FontAwesomeIcon icon={faSquarePlus} />
          <NavLink to="/Create" className={style.navlink}>
            {showPTags && <p>Create</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <FontAwesomeIcon onClick={handleNavLinkClick} icon={faUser} />
          <NavLink to="/Create" className={style.navlink}>
            {showPTags && <p>Profile</p>}
          </NavLink>
        </div>

        <div className={style.menuItem} onClick={toggleBottomSheet}>
          <FontAwesomeIcon icon={faBars} />
          <NavLink to="" className={style.navlink}>
            {showPTags && <p>More</p>}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
