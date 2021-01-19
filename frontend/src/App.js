import React from 'react';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from './pages/Landing';
import './App.css';

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
    </div>
    </Router>
  );
}

export default App;
