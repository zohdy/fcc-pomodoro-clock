import React from "react";
import "./Timer.css";

export default function Timer({ timer, breakActive }) {
  return (
    <div className="Timer">
      <h3>{breakActive ? "Break" : "Session"}</h3>
      <span>{timer}</span>
    </div>
  );
}
