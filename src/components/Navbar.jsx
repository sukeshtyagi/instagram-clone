import React, { useRef, useEffect, useState } from "react";
import style from "../style/Navbar.module.css";
import BottomSheet from "./Bottomsheet";
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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ usedIn }) {
  const bottomSheetRef = useRef(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const [showPTags, setShowPTags] = useState(true);
  const [showLensIcon, setShowLensIcon] = useState(false);
  const [showCrossIcon, setShowCrossIcon] = useState(true);

  const [instaIconPaddingLeft, setInstaIconPaddingLeft] = useState("20px");

  const [sideBarDivPaddingRight, setSideBarDivPaddingRight] = useState("60px");

  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleBottomSheet = () => {
    setShowBottomSheet(!showBottomSheet);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(event.target) &&
        showBottomSheet
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
    setShowSearchBox(!showSearchBox);
  };

  const handleNavLinkClick = () => {
    setShowPTags(true);
    setShowSearchBox(false);
  };

  const handleCrossClick = () => {
    setShowLensIcon(true);
    setShowCrossIcon(false);
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
          <NavLink to="/home" className={style.navlink}>
            <FontAwesomeIcon onClick={handleNavLinkClick} icon={faHouse} />
            {showPTags && <p>Home</p>}
          </NavLink>
        </div>

        <div className={style.menuItem} onClick={handleSearchClick}>
          <NavLink to="" className={style.navlink}>
            <FontAwesomeIcon
              onClick={handleNavLinkClick}
              icon={faMagnifyingGlass}
            />
            {showPTags && <p>Search</p>}
          </NavLink>
        </div>
        {showSearchBox && (
          <div className={style.searchBox}>
            <div className={style.searchDivContainer}>
              <h3>Search</h3>
              <div className={style.searchDiv}>
                {showLensIcon && <FontAwesomeIcon icon={faMagnifyingGlass} />}
                <input type="text" placeholder="search" />
                {showCrossIcon && (
                  <FontAwesomeIcon icon={faXmark} onClick={handleCrossClick} />
                )}
              </div>
            </div>
            <h5>Recent</h5>
          </div>
        )}

        <div className={style.menuItem}>
          <NavLink to="/explore" className={style.navlink}>
            <FontAwesomeIcon onClick={handleNavLinkClick} icon={faCompass} />
            {showPTags && <p>Explore</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <NavLink to="/reels" className={style.navlink}>
            <FontAwesomeIcon onClick={handleNavLinkClick} icon={faVideo} />
            {showPTags && <p>Reels</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <NavLink to="/message" className={style.navlink}>
            <FontAwesomeIcon icon={faFacebookMessenger} />
            {showPTags && <p>Message</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <NavLink to="/notification" className={style.navlink}>
            <FontAwesomeIcon icon={faHeart} />
            {showPTags && <p>Notification</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <NavLink to="/Create" className={style.navlink}>
            <FontAwesomeIcon icon={faSquarePlus} />
            {showPTags && <p>Create</p>}
          </NavLink>
        </div>

        <div className={style.menuItem}>
          <NavLink to="/Create" className={style.navlink}>
            <FontAwesomeIcon onClick={handleNavLinkClick} icon={faUser} />
            {showPTags && <p>Profile</p>}
          </NavLink>
        </div>

        <div className={style.menuItem} onClick={toggleBottomSheet}>
          <NavLink to="" className={style.navlink}>
            <FontAwesomeIcon icon={faBars} />
            {showPTags && <p>More</p>}
          </NavLink>
        </div>
      </div>
      <BottomSheet show={showBottomSheet} onHide={toggleBottomSheet} />
    </div>
  );
}

export default Navbar;
