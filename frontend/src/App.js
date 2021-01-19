import React from 'react';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/admin/challange" />
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
