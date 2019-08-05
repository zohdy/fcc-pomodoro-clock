import React from "react";
import "./Timer.css";

const Timer = ({ alarmColor, timerType, timeLeft }) => {
  const clockify = (timeLeft) => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };
  return (
    <div className="Timer" style={alarmColor}>
      <div className="Timer-wrapper">
        <span className="Timer-label" id="timer-label">
          {timerType}
        </span>
        <span className="Timer-display" id="time-left">
          {clockify(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default Timer;
