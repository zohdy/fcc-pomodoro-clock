import React, { useState, useEffect } from "react";
import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";
import Controls from "./Controls";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(3);
  const [timer, setTimer] = useState(sessionLength);
  const [trigger, setTrigger] = useState(false);
  const [breakActive, setBreakActive] = useState(false);

  useEffect(() => {
    let sessionId;
    let breakId;

    const startSession = () => {
      sessionId = setInterval(() => setTimer(timer - 1), 1000);
      if (timer < 0) {
        setBreakActive(true);
        setTimer(breakLength);
      }
    };

    const startBreak = () => {
      breakId = setInterval(() => setTimer(timer - 1), 1000);
      if (timer < 0) {
        setBreakActive(false);
        setTimer(sessionLength);
      }
    };

    if (trigger && !breakActive) {
      startSession();
      return () => clearInterval(sessionId);
    }
    if (trigger && breakActive) {
      startBreak();
      return () => clearInterval(breakId);
    }
  });

  const startTimer = () => {
    setTrigger(true);
  };

  const pauseTimer = () => {
    setTrigger(false);
  };

  const resetTimer = () => {
    setTrigger(false);
    setBreakLength(5);
    setSessionLength(25);
  };

  const changeTimerLength = (selection, delta) => {
    // Break Length
    if (selection === "break") {
      if (delta === "dec" && breakLength > 1) {
        setBreakLength(breakLength - 1);
      } else if (delta === "inc") {
        setBreakLength(breakLength + 1);
      }
    }
    // Session Length
    if (selection === "session") {
      if (delta === "dec" && sessionLength > 1) {
        setSessionLength(sessionLength - 1);
      } else if (delta === "inc") {
        setSessionLength(sessionLength + 1);
      }
    }
  };

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Settings
        changeTimerLength={changeTimerLength}
        breakLength={breakLength}
        sessionLength={sessionLength}
      />
      <Timer timer={timer} breakActive={breakActive} />
      <Controls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
