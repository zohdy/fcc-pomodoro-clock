import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./TimerLengthSettings.css";

const TimerLengthSettings = ({
  titleID,
  title,
  minID,
  onClick,
  lengthID,
  length,
  addID
}) => {
  return (
    <div className="TimerLengthSettings">
      <div className="TimerLengthSettings-title" id={titleID}>
        {title}
      </div>
      <div className="TimerLengthSettings-wrapper">
        <button id={minID} value="-" onClick={onClick}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="TimerLengthSettings-arrow"
          />
        </button>
        <span className="TimerLengthSettings-display" id={lengthID}>
          {length}
        </span>
        <button id={addID} value="+" onClick={onClick}>
          <FontAwesomeIcon
            className="TimerLengthSettings-arrow"
            icon={faArrowUp}
          />
        </button>
      </div>
    </div>
  );
};

export default TimerLengthSettings;
