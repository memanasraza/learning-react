import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
//import Clock from './newClock'
//const props = {a:2, b:4}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = this.getTime();
  }
  getTime(){
    const currentTime = new Date(),
          hours = currentTime.getHours(),
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          ampm = hours > 12 ? 'pm' : 'am';
    return {hours, minutes, seconds, ampm};
  }
  setTimer(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }
  updateClock(){
    const currentTime = new Date();
    this.setState({currentTime: currentTime}, this.setTimer);
  }
  

  render(){
const {hours, minutes, seconds, ampm} = this.state;


    return (
      <div className="clock">
        {hours === 0 ? 12 : (hours > 12) ? hours - 12 : hours}
        :
        {minutes > 9 ? minutes : `0${minutes}`}
        :
        {seconds > 9 ? seconds : `0${seconds}`} {ampm}
      </div>
    )

  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
