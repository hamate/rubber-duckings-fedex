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
import Challenge from './pages/Challenge';
import AdminPage from './pages/AdminPage';
import Statistics from './pages/Statistics';
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
        <Route exact path="/challenge-setting" />
        <Route path="/challenge" component={Challenge} />
        <Route exact path="/admin" component={AdminPage}/>
        <Route exact path="/stats" component={Statistics}/>
        <Route exact path="/">
            {tokenExists() ? <Redirect to="/challenge" /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
