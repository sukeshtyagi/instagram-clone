import React from "react";
import { NavLink } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import style from "../style/Bottomsheet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faChartLine,
  faCircleInfo,
  faGear,
  faMoon,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

function BottomSheet({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} animation={false} centered>
      <Modal.Body>
        <div className={style.bottomSheetOuterContainer}>
          <div className={style.bottomSheetSection1}>
            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faGear} />
              <NavLink to="" className={style.navlink}>
                <p>Settings</p>
              </NavLink>
            </div>

            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faChartLine} />
              <NavLink to="" className={style.navlink}>
                <p>Your Activity</p>
              </NavLink>
            </div>

            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faBookmark} />
              <NavLink to="" className={style.navlink}>
                <p>Saved</p>
              </NavLink>
            </div>

            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faMoon} />
              <NavLink to="" className={style.navlink}>
                <p>Switch appearance</p>
              </NavLink>
            </div>

            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faCircleInfo} />
              <NavLink to="" className={style.navlink}>
                <p>Report a problem</p>
              </NavLink>
            </div>
          </div>

          <div className={style.bottomSheetSection2}>
            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faThreads} className={style.threads} />
              <NavLink to="" className={style.navlink}>
                <p>Threads</p>
                <FontAwesomeIcon icon={faArrowRight} className={style.icon} />
              </NavLink>
            </div>
          </div>

          <div className={style.bottomSheetSection3}>
            <div className={style.bottomSheetContentContainer}>
              <NavLink to="" className={style.navlink}>
                <p>Switch accounts</p>
              </NavLink>
            </div>
          </div>
          <div className={style.bottomSheetSection4}>
            <div className={style.bottomSheetContentContainer}>
              <NavLink to="" className={style.navlink}>
                <p>Logout</p>
              </NavLink>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BottomSheet;
