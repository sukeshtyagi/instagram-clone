import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import style from "../style/Explore.module.css";

function Explore() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const url = "http://localhost:4000/explore";
    const response = await fetch(url);
    console.log(response);
    const database = await response.json();
    console.log(database);
    setData(database);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.exploreContainer}>
      <Navbar />
      <div className={style.gridContainer}>
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`${style.item} ${style["item" + (index + 1)]}`}
            >
              <img src={item.image} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Explore;
