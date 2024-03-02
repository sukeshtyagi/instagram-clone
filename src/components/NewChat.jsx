import React from "react";
import style from "../style/NewChat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function NewChat({ newChat, toggleNewChat }) {
  return (
    <div className={style.overlayContainer}>
      <div className={style.newChatContainer}>
        <div className={style.topDiv}>
          <h4>New Message</h4>
          <FontAwesomeIcon
            icon={faXmark}
            className={style.newUserLoginCancel}
            onClick={toggleNewChat}
          />
        </div>
        <div className={style.centerDiv}>
          <h4>To:</h4>
          <input type="text" placeholder="search" />
        </div>
        <div className={style.bodyDiv}>
          <textarea
            name=""
            id=""
            cols="50"
            rows="18"
            placeholder="No accounts found."
          ></textarea>
          <button>Chat</button>
        </div>
      </div>
    </div>
  );
}

export default NewChat;
