import React, { useState, useEffect } from "react";
import style from "../style/Suggestions.module.css";

function Suggestions({ mainDivStyle, cardDivStyle }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:4000/data";
      try {
        const response = await fetch(url);
        if (response.ok) {
          const serverData = await response.json();
          console.log("data received from server", serverData);
          setData(serverData);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    getData();
    console.log(data);
  }, []);

  return (
    <div className={mainDivStyle ? mainDivStyle : style.mainDivStyle}>
      <h3>Suggested for you</h3>
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className={cardDivStyle ? cardDivStyle : style.cardDiv}
          >
            <div className={style.allDetailsDiv}>
              <img src={item.image} alt="" />
              <div className={style.detailsDiv}>
                <h6>{item.username}</h6>
                <p>{item.name}</p>
                <p>{item.reason}</p>
              </div>
            </div>
            <button className={style.followBtn}>Follow</button>
          </div>
        ))}
    </div>
  );
}

export default Suggestions;
