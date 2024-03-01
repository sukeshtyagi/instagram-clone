import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import style from "../style/Explore.module.css";

function Explore() {
  const [data, setData] = useState(null);
  const [rowCount, setRowCount] = useState(0);
  const [showPTags, setShowPTags] = useState(true);

  const updateShowPTags = (newValue) => {
    setShowPTags(newValue);
  };

  const getData = async () => {
    const url = "http://localhost:4000/explore";
    const response = await fetch(url);
    const database = await response.json();
    setData(database);
    setRowCount(Math.ceil(database.length / 3));
  };

  useEffect(() => {
    getData();
  }, []);

  const shouldSpanTwoRows = (index) => {
    return index % 10 === 2 || index % 10 === 5;
  };

  return (
    <div className={style.exploreContainer}>
      <Navbar showPTags={showPTags} updateShowPTags={updateShowPTags} />
      <div
        className={style.gridContainer}
        style={{ gridTemplateRows: `repeat(${rowCount}, auto)` }}
      >
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`${style.item} ${style["item" + (index + 1)]}`}
              style={{
                gridRow: shouldSpanTwoRows(index) ? "span 2" : "span 1",
              }}
            >
              <img src={item.image} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Explore;
