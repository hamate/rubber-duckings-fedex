import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChallenge } from '../redux/challenge/challenge.action';
import '../styles/Landing.css';

function Landing() {
  const dispatch = useDispatch();
  const challenge = useSelector((state) => state.challenge.challenge)
  
  useEffect(() => {
    dispatch(getChallenge());
  }, [dispatch]);

  let challengeStartTimestamp = new Date(challenge.startDate).getTime();
  let currentTimestamp = Date.now();

  return(
    <div className="landing-container">

      <div className="btn landing-admin-btn">
        <a href="/admin">ADMIN LOGIN</a>
      </div>

      <div className="landing-main-text">

        <h1>ARE YOU READY FOR A <br /><span>CHALLENGE?!</span></h1>

        {
        challengeStartTimestamp > currentTimestamp ?
        <div>
          <div className="landing-details">
            <h2>{challenge.title}</h2>
            <p>{challenge.description}</p>
          </div>
          <div className="landing-user-btns">
            <div className="btn login-btn">
              <a href="/login">LOGIN</a>
            </div>
            <div className="btn register-btn">
              <a href="/register">JOIN CHALLENGE</a>
            </div>
          </div>
        </div> 
        : 
        <h3>Sorry! There is no new challenge at the moment.<br /> Please, come back later!</h3>
        }

      </div>
      
    </div>
  );
}

export default Landing;