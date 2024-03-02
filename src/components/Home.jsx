import React, { useState, useEffect } from "react";
import style from "../style/Home.module.css";
import Navbar from "./Navbar";
import Suggestions from "./Suggestions";

function Home() {
  const [showPTags, setShowPTags] = useState(true);

  const updateShowPTags = (newValue) => {
    setShowPTags(newValue);
  };

  return (
    <div className={style.homeContainer}>
      <Navbar showPTags={showPTags} updateShowPTags={updateShowPTags} />
      <Suggestions />
    </div>
  );
}

export default Home;
