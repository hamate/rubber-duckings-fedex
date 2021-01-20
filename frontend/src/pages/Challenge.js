import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCommitmentsAsync } from '../redux/commitments/commitments.actions';
import ChallengeOverview from '../components/challenge-overview/challenge-overview.component';
import '../styles/Challenge.css';

function Challenge() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommitmentsAsync());
  }, [dispatch])
  return (
    <div className="challenge-container">
      <nav>
        <div className="menu dummy"/>
      </nav>

      <main>
        <div className="middle-content">
          <div className="counter dummy" />
          <div className="content-container dummy" >
            <Switch>
              <Route exact path="/challenge/commitments" />
              <Route exact path="/challenge/overview" component={ChallengeOverview} />
              <Route exact path="/challenge/statistics" />
            </Switch>
          </div>
        </div>
        <div className="message-board dummy" />
      </main>

      

    </div>
  );
}

export default Challenge;