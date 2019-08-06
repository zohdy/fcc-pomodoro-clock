import React, { Component } from "react";
import TimerLengthSettings from "./TimerLengthSettings";
import Timer from "./Timer";
import TimerControl from "./TimerControl";
import "./App.css";

export default class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    isTimerRunning: false,
    timerType: "Session",
    timeLeft: 1500,
    intervalID: ""
  };

  changeLength = (e) => {
    let operator = e.currentTarget.getAttribute("operator");
    let stateToChange = e.currentTarget.getAttribute("length-type");
    let lengthToChange =
      stateToChange === "sessionLength"
        ? this.state.sessionLength
        : this.state.breakLength;

    if (operator === "-" && lengthToChange !== 1) {
      this.setState({
        [stateToChange]: lengthToChange - 1,
        timeLeft: lengthToChange * 60 - 60
      });
    } else if (operator === "+" && lengthToChange !== 60) {
      this.setState({
        [stateToChange]: lengthToChange + 1,
        timeLeft: lengthToChange * 60 + 60
      });
    }
  };

  timerControl = () => {
    if (!this.state.isTimerRunning) {
      this.beginCountDown();
      this.setState({ isTimerRunning: true });
    } else {
      this.setState({ isTimerRunning: false });
      clearInterval(this.state.intervalID);
    }
  };

  beginCountDown = () => {
    this.setState({
      intervalID: setInterval(() => {
        this.setState({ timeLeft: this.state.timeLeft - 1 });
        this.switchTimer();
        this.playAlarmSound(this.state.timeLeft);
      }, 1000)
    });
  };

  switchTimer = () => {
    const {
      timeLeft,
      sessionLength,
      breakLength,
      intervalID,
      timerType
    } = this.state;
    if (timeLeft < 0) {
      if (timerType === "Session") {
        clearInterval(intervalID);
        this.beginCountDown();
        this.setState({
          timeLeft: breakLength * 60,
          timerType: "Break"
        });
      } else {
        clearInterval(intervalID);
        this.beginCountDown();
        this.setState({
          timeLeft: sessionLength * 60,
          timerType: "Session"
        });
      }
    }
  };

  playAlarmSound = (time) => {
    if (time === 0) {
      this.audioBeep.play();
    }
  };

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isTimerRunning: false,
      timerType: "Session",
      timeLeft: 1500,
      intervalID: ""
    });
    clearInterval(this.state.intervalID);
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };
  render() {
    const {
      breakLength,
      sessionLength,
      timerType,
      alarmColor,
      isTimerRunning,
      timeLeft
    } = this.state;
    return (
      <div className="App">
        <h1 className="title">Pomodoro Clock</h1>
        <div className="wrapper">
          <TimerLengthSettings
            titleID="break-label"
            decrementID="break-decrement"
            incrementID="break-increment"
            lengthID="break-length"
            title="Break Length"
            changeLength={!isTimerRunning ? this.changeLength : null}
            length={breakLength}
            lengthType={"breakLength"}
          />
          <TimerLengthSettings
            titleID="session-label"
            decrementID="session-decrement"
            incrementID="session-increment"
            lengthID="session-length"
            title="Session Length"
            changeLength={!isTimerRunning ? this.changeLength : null}
            length={sessionLength}
            lengthType={"sessionLength"}
          />
        </div>
        <Timer
          timerType={timerType}
          alarmColor={alarmColor}
          timeLeft={timeLeft}
        />
        <TimerControl
          timerControl={this.timerControl}
          reset={this.reset}
          isTimerRunning={isTimerRunning}
        />
        <audio
          id="beep"
          preload="auto"
          src="https://goo.gl/65cBl1"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
        />
      </div>
    );
  }
}
