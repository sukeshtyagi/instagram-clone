import React from "react";
import Navbar from "./Navbar";
import style from "../style/Messages.module.css";

function Messages() {
  return (
    <div className={style.messagesContainer}>
      <div className={style.leftDiv}>
        <Navbar />
      </div>
      <div className={style.centerDiv}>
        <h3>hi from center div</h3>
      </div>
      <div className={style.rightDiv}>
        <h3>hi from right div</h3>
      </div>
    </div>
  );
}

export default Messages;
