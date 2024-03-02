import React from "react";
import style from "../style/NotificationBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function NotificationBox() {
  return (
    <div className={style.notificationBoxContainer}>
      <div className={style.topDiv}>
        <h3>Notifications</h3>
      </div>
      <div className={style.midDiv}>
        <FontAwesomeIcon icon={faHeart} className={style.midDivIcon} />
        <p className={style.midDivP1}>Activity on your posts</p>
        <p className={style.midDivP2}>
          When someone likes or comments on one of your posts,you'll see it
          here.
        </p>
      </div>
      <div className={style.bodyDiv}>
        <h1>main div of home page</h1>
      </div>
    </div>
  );
}

export default NotificationBox;
