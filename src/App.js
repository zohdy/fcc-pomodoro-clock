import React, { Component } from "react";
import TimerLengthSettings from "./TimerLengthSettings";
import Timer from "./Timer";
import TimerControl from "./TimerControl";
import "./App.css";

export default class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerState: "stopped",
    timerType: "Session",
    timeLeft: 1500,
    intervalID: "",
    alarmColor: { color: "white" }
  };

  setBreakLength = (e) => {
    this.lengthControl(
      "breakLength",
      e.currentTarget.value,
      this.state.breakLength,
      "Session"
    );
  };
  setSessionLength = (e) => {
    this.lengthControl(
      "sessionLength",
      e.currentTarget.value,
      this.state.sessionLength,
      "Break"
    );
  };
  lengthControl = (stateToChange, sign, currentLength, timerType) => {
    if (this.state.timerState === "running") {
      return;
    }

    if (this.state.timerType === timerType) {
      if (sign === "-" && currentLength !== 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (sign === "+" && currentLength !== 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else {
      if (sign === "-" && currentLength !== 1) {
        this.setState({
          [stateToChange]: currentLength - 1,
          timeLeft: currentLength * 60 - 60
        });
      } else if (sign === "+" && currentLength !== 60) {
        this.setState({
          [stateToChange]: currentLength + 1,
          timeLeft: currentLength * 60 + 60
        });
      }
    }
  };

  timerControl = () => {
    if (this.state.timerState === "stopped") {
      this.beginCountDown();
      this.setState({ timerState: "running" });
    } else {
      this.setState({ timerState: "stopped" });
      this.state.intervalID && clearInterval(this.state.intervalID);
    }
  };

  beginCountDown = () => {
    this.setState({
      intervalID: setInterval(() => {
        this.decrementTimer();
        this.phaseControl();
      }, 1000)
    });
  };

  decrementTimer = () => {
    this.setState({ timeLeft: this.state.timeLeft - 1 });
  };

  phaseControl = () => {
    this.warning(this.state.timeLeft);
    this.buzzer(this.state.timeLeft);
    if (this.state.timeLeft < 0) {
      if (this.state.timerType === "Session") {
        this.state.intervalID && clearInterval(this.state.intervalID);
        this.beginCountDown();
        this.switchTimer(this.state.breakLength * 60, "Break");
      } else {
        this.state.intervalID && clearInterval(this.state.intervalID);
        this.beginCountDown();
        this.switchTimer(this.state.sessionLength * 60, "Session");
      }
    }
  };

  warning = (_timeLeft) => {
    _timeLeft < 61
      ? this.setState({ alarmColor: { color: "#a50d0d" } })
      : this.setState({ alarmColor: { color: "white" } });
  };

  buzzer = (_timeLeft) => {
    if (_timeLeft === 0) {
      this.audioBeep.play();
    }
  };

  switchTimer = (num, str) => {
    this.setState({
      timeLeft: num,
      timerType: str,
      alarmColor: { color: "white" }
    });
  };

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerState: "stopped",
      timerType: "Session",
      timeLeft: 1500,
      intervalID: "",
      alarmColor: { color: "white" }
    });
    this.state.intervalID && clearInterval(this.state.intervalID);
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };
  render() {
    const {
      breakLength,
      sessionLength,
      timerType,
      alarmColor,
      timerState,
      timeLeft
    } = this.state;
    return (
      <div className="App">
        <h1 className="title">Pomodoro Clock</h1>
        <div className="wrapper">
          <TimerLengthSettings
            titleID="break-label"
            minID="break-decrement"
            addID="break-increment"
            lengthID="break-length"
            title="Break Length"
            onClick={this.setBreakLength}
            length={breakLength}
          />
          <TimerLengthSettings
            titleID="session-label"
            minID="session-decrement"
            addID="session-increment"
            lengthID="session-length"
            title="Session Length"
            onClick={this.setSessionLength}
            length={sessionLength}
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
          timerState={timerState}
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
