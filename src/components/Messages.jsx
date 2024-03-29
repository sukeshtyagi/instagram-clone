import React, { useState } from "react";
import Navbar from "./Navbar";
import style from "../style/Messages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import AnotherLogin from "./AnotherLogin";
import NewChat from "./NewChat";

function Messages() {
  const [showLogin, setShowLogin] = useState(false);
  const [newChat, setNewChat] = useState(false);
  const [showNavigationBox, setShowNavigationBox] = useState(false);
  const [showPTags, setShowPTags] = useState(false);

  const handleNavigationClick = () => {
    setShowNavigationBox(true);
    console.log("handleNavigationClick");
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const openNewChat = () => {
    setNewChat(!newChat);
    setShowNavigationBox(false);
  };

  const updateShowPTags = (newValue) => {
    setShowPTags(newValue);
  };

  return (
    <div className={style.messagesContainer}>
      <div className={style.leftDiv}>
        <Navbar
          showPTags={showPTags}
          updateShowPTags={updateShowPTags}
          showNavigationBox={showNavigationBox}
          handleNavigationClick={handleNavigationClick}
        />
      </div>

      <div className={style.centerDiv}>
        <div className={style.newMessageDiv}>
          <div className={style.profileNameDiv}>
            <h3>instagram_clone</h3>
            <FontAwesomeIcon icon={faAngleDown} onClick={toggleLogin} />
          </div>
          <FontAwesomeIcon icon={faEdit} onClick={openNewChat} />
        </div>

        {showLogin && (
          <div className={style.overlay}>
            <div className={style.newUserLogin}>
              <AnotherLogin showLogin={showLogin} toggleLogin={toggleLogin} />
            </div>
          </div>
        )}

        {newChat && <NewChat newChat={newChat} toggleNewChat={openNewChat} />}

        <div className={style.requestDiv}>
          <h3>Messages</h3>
          <h4>Requests</h4>
        </div>

        <div className={style.oldMessageDiv}>
          <p>No messages found.</p>
        </div>
      </div>

      <div className={style.rightDiv}>
        <div className={style.sendMessageDiv}>
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <h2>Your messages</h2>
          <p>Send private photos and messages to a friend or group.</p>
          <button onClick={openNewChat}>send message</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
