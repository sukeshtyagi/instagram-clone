import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import style from "../style/Reels.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faEllipsisV,
  faHandPeace,
  faGuitar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Reels() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const url = "http://localhost:4000/reels";
    try {
      const response = await fetch(url);
      const serverData = await response.json();
      console.log(serverData);
      setData(serverData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {data &&
        data.map((item) => (
          <>
            <div className={style.reelsContainer}>
              <div className={style.reelsContent}>
                <iframe
                  src={item.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={style.iconContent}>
                <div className={style.likesDiv}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>1601K</p>
                </div>

                <div className={style.commentsDiv}>
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                  <p>1995K</p>
                </div>

                <div className={style.telegramDiv}>
                  <FontAwesomeIcon icon={faTelegram} />
                  <p></p>
                </div>

                <div className={style.saveDiv}>
                  <FontAwesomeIcon icon={faBookmark} />
                  <p></p>
                </div>

                <div className={style.optionsDiv}>
                  <FontAwesomeIcon icon={faEllipsisV} />
                  <p></p>
                </div>

                <div className={style.imageDiv}>
                  <img src={item.image} alt="" width={40} height={30} />
                </div>
              </div>
            </div>
            <div className={style.onvideo}>
              <div className={style.onvideo1}>
                <img src={item.image} alt="" />
                <p>save earth</p>
                <p>.</p>
                <button>Follow</button>
              </div>
              <div className={style.onvideo2}>
                <p>tag your friends</p>
                <FontAwesomeIcon icon={faHandPeace} />
              </div>
              <div className={style.onvideo3}>
                <FontAwesomeIcon icon={faGuitar} />
                <p>original audio</p>
              </div>
            </div>
          </>
        ))}
    </>
  );
}

export default Reels;
