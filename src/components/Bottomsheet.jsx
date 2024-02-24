import React from "react";
import { Modal } from "react-bootstrap";
import style from "../style/Bottomsheet.module.css"; // Import your CSS module

function BottomSheet({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} animation={false} centered>
      <Modal.Body>
        <div className={style.bottomSheetContainer}>
          <div className={style.bottomSheetContent}>
            <h4>Section 1</h4>
            <ul>
              <li>Settings</li>
              <li>Activity</li>
              <li>Saved</li>
              <li>Switch Appearance</li>
              <li>Report a Problem</li>
            </ul>
          </div>

          <div className={style.bottomSheetContent}>
            <h4>Section 2</h4>
            <ul>
              <li>Threads</li>
            </ul>
          </div>

          <div className={style.bottomSheetContent}>
            <h4>Section 3</h4>
            <ul>
              <li>Switch Account</li>
            </ul>
          </div>

          <div className={style.bottomSheetContent}>
            <h4>Section 4</h4>
            <ul>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BottomSheet;
