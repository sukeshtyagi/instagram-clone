import React, { useState, useEffect } from "react";
import style from "../style/Home.module.css";
import BottomSheet from "./Bottomsheet";
import Navbar from "./Navbar";

function Home() {
  const [data, setData] = useState(null);

  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const toggleBottomSheet = () => {
    setShowBottomSheet(!showBottomSheet);
  };

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
    <div className={style.homeContainer}>
      <Navbar toggleBottomSheet={toggleBottomSheet}/>
      <div className={style.mainDiv}>
        <h3>Suggested for you</h3>

        {data &&
          data.map((item) => (
            <div key={item.id} className={style.cardDiv}>
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
      <BottomSheet show={showBottomSheet} onHide={toggleBottomSheet} />
    </div>
  );
}

export default Home;
