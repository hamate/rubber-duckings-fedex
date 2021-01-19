<<<<<<< HEAD
import React from 'react';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from './pages/Landing';
=======
>>>>>>> 6d65591... overview component not finished
import './App.css';
import ChallengeOverview from './components/challenge-overview/challenge-overview.component';

function App() {
  const tokenExists = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  };

  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" />
        <Route exact path="/login" />
        <Route exact path="/admin" />
        <Route path="/challange" />
        <Route exact path="/">
            {tokenExists() ? <Redirect to="/challange" /> : <Redirect to="/" />}
        </Route>
      </Switch>
=======
        <ChallengeOverview numOfDays={15} startDate={new Date()} />
>>>>>>> 6d65591... overview component not finished
    </div>
    </Router>
  );
}

export default App;
