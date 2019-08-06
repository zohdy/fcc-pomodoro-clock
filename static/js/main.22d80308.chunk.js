(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),s=n.n(i),l=(n(19),n(5)),c=n(9),o=n(10),m=n(12),g=n(11),u=n(13),h=n(3),p=n(2),f=(n(25),function(e){var t=e.titleID,n=e.title,a=e.decrementID,i=e.changeLength,s=e.lengthID,l=e.length,c=e.incrementID,o=e.lengthType;return r.a.createElement("div",{className:"TimerLengthSettings"},r.a.createElement("div",{className:"TimerLengthSettings-title",id:t},n),r.a.createElement("div",{className:"TimerLengthSettings-wrapper"},r.a.createElement("button",{id:a,onClick:i,"length-type":o,operator:"-"},r.a.createElement(h.a,{icon:p.a,className:"TimerLengthSettings-arrow"})),r.a.createElement("span",{className:"TimerLengthSettings-display",id:s},l),r.a.createElement("button",{id:c,onClick:i,operator:"+","length-type":o},r.a.createElement(h.a,{className:"TimerLengthSettings-arrow",icon:p.b}))))}),d=(n(26),function(e){var t=e.alarmColor,n=e.timerType,a=e.timeLeft;return r.a.createElement("div",{className:"Timer",style:t},r.a.createElement("div",{className:"Timer-wrapper"},r.a.createElement("span",{className:"Timer-label",id:"timer-label"},n),r.a.createElement("span",{className:"Timer-display",id:"time-left"},function(e){var t=Math.floor(e/60),n=e-60*t;return(t=t<10?"0"+t:t)+":"+(n=n<10?"0"+n:n)}(a))))}),L=(n(27),function(e){var t=e.timerControl,n=e.reset,a=e.isTimerRunning;return r.a.createElement("div",{className:"TimerControl"},r.a.createElement("button",{id:"start_stop",onClick:t},r.a.createElement(h.a,{icon:a?p.c:p.d})),r.a.createElement("button",{id:"reset",onClick:n},r.a.createElement(h.a,{icon:p.e})))}),b=(n(28),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={breakLength:5,sessionLength:25,isTimerRunning:!1,timerType:"Session",timeLeft:1500,intervalID:""},n.changeLength=function(e){var t,a=e.currentTarget.getAttribute("operator"),r=e.currentTarget.getAttribute("length-type"),i="sessionLength"===r?n.state.sessionLength:n.state.breakLength;if("-"===a&&1!==i)n.setState((t={},Object(l.a)(t,r,i-1),Object(l.a)(t,"timeLeft",60*i-60),t));else if("+"===a&&60!==i){var s;n.setState((s={},Object(l.a)(s,r,i+1),Object(l.a)(s,"timeLeft",60*i+60),s))}},n.timerControl=function(){n.state.isTimerRunning?(n.setState({isTimerRunning:!1}),clearInterval(n.state.intervalID)):(n.beginCountDown(),n.setState({isTimerRunning:!0}))},n.beginCountDown=function(){n.setState({intervalID:setInterval(function(){n.setState({timeLeft:n.state.timeLeft-1}),n.switchTimer(),n.playAlarmSound(n.state.timeLeft)},1e3)})},n.switchTimer=function(){var e=n.state,t=e.timeLeft,a=e.sessionLength,r=e.breakLength,i=e.intervalID,s=e.timerType;t<0&&("Session"===s?(clearInterval(i),n.beginCountDown(),n.setState({timeLeft:60*r,timerType:"Break"})):(clearInterval(i),n.beginCountDown(),n.setState({timeLeft:60*a,timerType:"Session"})))},n.playAlarmSound=function(e){0===e&&n.audioBeep.play()},n.reset=function(){n.setState({breakLength:5,sessionLength:25,isTimerRunning:!1,timerType:"Session",timeLeft:1500,intervalID:""}),clearInterval(n.state.intervalID),n.audioBeep.pause(),n.audioBeep.currentTime=0},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.breakLength,a=t.sessionLength,i=t.timerType,s=t.alarmColor,l=t.isTimerRunning,c=t.timeLeft;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Pomodoro Clock"),r.a.createElement("div",{className:"wrapper"},r.a.createElement(f,{titleID:"break-label",decrementID:"break-decrement",incrementID:"break-increment",lengthID:"break-length",title:"Break Length",changeLength:l?null:this.changeLength,length:n,lengthType:"breakLength"}),r.a.createElement(f,{titleID:"session-label",decrementID:"session-decrement",incrementID:"session-increment",lengthID:"session-length",title:"Session Length",changeLength:l?null:this.changeLength,length:a,lengthType:"sessionLength"})),r.a.createElement(d,{timerType:i,alarmColor:s,timeLeft:c}),r.a.createElement(L,{timerControl:this.timerControl,reset:this.reset,isTimerRunning:l}),r.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1",ref:function(t){e.audioBeep=t}}))}}]),t}(a.Component));s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.22d80308.chunk.js.map