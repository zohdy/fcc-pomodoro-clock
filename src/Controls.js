import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import "./Controls.css";

export default function Controls({ startTimer, pauseTimer, resetTimer }) {
  return (
    <div className="Controls">
      <FontAwesomeIcon className="icon" icon={faPlay} onClick={startTimer} />
      <FontAwesomeIcon className="icon" icon={faPause} onClick={pauseTimer} />
      <FontAwesomeIcon className="icon" icon={faUndoAlt} onClick={resetTimer} />
    </div>
  );
}
