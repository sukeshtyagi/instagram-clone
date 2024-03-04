import React, { useState, useRef } from "react";
import style from "../style/Create.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faXmark } from "@fortawesome/free-solid-svg-icons";

function Create({ showCreateBox, toggleCreateBox }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className={style.overlayDiv}>
        <FontAwesomeIcon
          icon={faXmark}
          className={style.cancelIcon}
          onClick={toggleCreateBox}
        />
        <div className={style.createContainer}>
          <div className={style.topDiv}>
            <h6>create new post</h6>
          </div>
          <div className={style.mainDiv}>
            <div className={style.iconsDiv}>
              <FontAwesomeIcon icon={faImage} />
              <FontAwesomeIcon icon={faVideo} className={style.icon2} />
            </div>
            <p>Drag photos and videos here</p>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <button onClick={handleButtonClick}>Select from computer</button>
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
