import React from 'react';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Challenge from './pages/Challenge';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
 
  const token = useSelector(state => state.session.token);
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
            {token ? <Redirect to="/challenge" /> : <Landing />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/challenge" component={Challenge} />
        <Route exact path="/admin" component={AdminPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
