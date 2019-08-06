import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import "./TimerControl.css";

const TimerControl = ({ timerControl, reset, isTimerRunning }) => {
  return (
    <div className="TimerControl">
      <button id="start_stop" onClick={timerControl}>
        <FontAwesomeIcon icon={!isTimerRunning ? faPlay : faPause} />
      </button>
      <button id="reset" onClick={reset}>
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

export default TimerControl;
