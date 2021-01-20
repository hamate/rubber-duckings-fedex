import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Counter.css';

function Counter() {
  const challenge = useSelector((state) => state.challenge.challenge);
  // const [ challengeStatus, setChallengeStatus ] = useState();
  const [ until, setUntil ] = useState();

  const challengeStartTimestamp = new Date(challenge.startDate).getTime();
  const challengeEndTimestamp = new Date(challenge.endDate).getTime();
  const currentTimestamp = Date.now();

  const convertTime = (timestamp) => {
    let days = Math.floor(timestamp / (60 * 60 * 24));
    let hours = Math.floor(timestamp / 60 / 60) - (days * 24);
    let minutes = Math.floor(timestamp / 60) - (hours * 60)  - (days * 24);
    let seconds = timestamp % 60;

    let formatedTime = 
      days.toString() + ' day(s) ' + 
      hours.toString().padStart(2, '0') + ' h ' + 
      minutes.toString().padStart(2, '0') + ' m ' + 
      seconds.toString().padStart(2, '0') + ' s';

    return formatedTime;
  }

  useEffect(() => {
      const getUntilTime = setInterval(() => {
        if (currentTimestamp < challengeStartTimestamp) {
          let untilTimestamp = Math.floor((challengeStartTimestamp - currentTimestamp)/1000);
          let time = convertTime(untilTimestamp)
          setUntil(time);
        }
        if (currentTimestamp < challengeEndTimestamp) {
          let untilTimestamp = Math.floor((challengeEndTimestamp - currentTimestamp)/1000);
          let time = convertTime(untilTimestamp)
          setUntil(time);
        }
    }, 1000 );

    return () => clearInterval(getUntilTime);
  }, [currentTimestamp, challengeStartTimestamp, challengeEndTimestamp]);

  return (
    <div className="counter-container">
      {currentTimestamp < challengeStartTimestamp ?
      <h1><span>{until}</span> 'till <span>CHALLENGE</span> starts</h1> :
      (currentTimestamp < challengeEndTimestamp ? 
      <h1><span>{until}</span> 'till <span>CHALLENGE</span> ends</h1> :
      <h1>There is no <span>CHALLENGE</span> right now!</h1>
      )}
    </div>
  );
}

export default Counter;