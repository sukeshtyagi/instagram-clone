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
  const [likeCounts, setLikeCounts] = useState({});
  const [likeEvent, setLikeEvent] = useState(true);
  const [inputBoxVisible, setInputBoxVisible] = useState(false);
  const [input, setInput] = useState("");
  const [visibleItemId, setVisibleItemId] = useState(null);

  const getData = async () => {
    const url = "http://localhost:4000/reels";
    try {
      const response = await fetch(url);
      const serverData = await response.json();
      console.log(serverData);
      setData(serverData);
      const initialLikeCounts = {};
      serverData.forEach((item) => {
        initialLikeCounts[item.id] = item.likes;
      });
      setLikeCounts(initialLikeCounts);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id) => {
    if (likeEvent) {
      handleLikeClick(id);
    } else {
      handleUnlikeClick(id);
    }
    setLikeEvent(!likeEvent);
  };

  const handleLikeClick = (id) => {
    setLikeCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0;
      return {
        ...prevCounts,
        [id]: currentCount + 1,
      };
    });
  };

  const handleUnlikeClick = (id) => {
    setLikeCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0;
      return {
        ...prevCounts,
        [id]: Math.max(0, currentCount - 1),
      };
    });
  };

  const handleCommentsClick = (id) => {
    setInputBoxVisible(!inputBoxVisible);
    console.log(inputBoxVisible);
    console.log(id);
  };

  return (
    <>
      <Navbar />
      {data &&
        data.map((item) => (
          <div key={item.id} className={style.reelsContainer}>
            <div className={style.reelsContent}>
              <iframe
                src={item.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={style.iconContent}>
              <div className={style.likesDiv}>
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => handleClick(item.id)}
                />
                <p>{likeCounts[item.id] || 0}</p>
              </div>

              <div className={style.commentsDiv}>
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  onClick={() => {
                    handleCommentsClick(item.id);
                  }}
                />
                {inputBoxVisible && (
                  <input
                    className={style.input}
                    type="text"
                    value={input}
                    placeholder="Comment here"
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  />
                )}

                <p>95</p>
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

            <div className={style.onvideo}>
              <div className={style.onvideo1}>
                <img src={item.image} alt="" />
                <p>save earth</p>
                <p>---</p>
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
          </div>
        ))}
    </>
  );
}

export default Reels;
