import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Settings.css";

const Settings = ({ breakLength, sessionLength, changeTimerLength }) => {
  const handleClick = (e) => {
    let selection = e.currentTarget
      .closest(".wrapper")
      .getAttribute("class")
      .split(" ")[1];
    let clicked = e.currentTarget.getAttribute("data-icon");
    let delta = clicked === "arrow-up" ? "inc" : "dec";
    changeTimerLength(selection, delta);
  };

  return (
    <div className="Settings">
      <div>
        <h3>Break Length</h3>
        <div className="wrapper break">
          <FontAwesomeIcon
            className="arrow arrow-up"
            icon={faArrowUp}
            onClick={handleClick}
          />
          <span className="time">{breakLength}</span>
          <FontAwesomeIcon
            className="arrow arrow-down"
            icon={faArrowDown}
            onClick={handleClick}
          />
        </div>
      </div>
      <div>
        <h3>Session Length</h3>
        <div className="wrapper session">
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowUp}
            onClick={handleClick}
          />
          <span className="time">{sessionLength}</span>
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowDown}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
