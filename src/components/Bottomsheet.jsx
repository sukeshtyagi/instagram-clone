import React from "react";
import { Modal } from "react-bootstrap";
import style from "../style/Bottomsheet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function BottomSheet({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} animation={false} centered>
      <Modal.Body>
        <div className={style.bottomSheetOuterContainer}>
          <div className={style.bottomSheetSection1}>
            <div className={style.bottomSheetContentContainer}>
              <FontAwesomeIcon icon={faGear}/>
              <p>Settings</p>
            </div>

            <div className={style.bottomSheetContentContainer}>
              {/*icon */}
              <p>Your Activity</p>
            </div>

            <div className={style.bottomSheetContentContainer}>
              {/*icon */}
              <p>Saved</p>
            </div>

            <div className={style.bottomSheetContentContainer}>
              {/*icon */}
              <p>Switch appearance</p>
            </div>

            <div className={style.bottomSheetContentContainer}>
              {/*icon */}
              <p>Report a problem</p>
            </div>
          </div>

          <div className={style.bottomSheetSection2}>
            <div className={style.bottomSheetContentContainer}>
              {/*icon */}
              <p>Threads</p>
            </div>
          </div>

          <div className={style.bottomSheetSection3}>
            <div className={style.bottomSheetContentContainer}>
              <p>Switch accounts</p>
            </div>
          </div>
          <div className={style.bottomSheetSection4}>
            <div className={style.bottomSheetContentContainer}>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BottomSheet;
