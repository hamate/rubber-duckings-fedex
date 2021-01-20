import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Challenge.css';

function Challenge() {
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
              <Route exact path="/challenge/overview" />
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