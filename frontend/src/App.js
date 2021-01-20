import React from 'react';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from './pages/Landing';
<<<<<<< HEAD
import Login from './pages/Login';
import Register from './pages/Register';
import Challenge from './pages/Challenge';
=======
import AdminPage from './pages/AdminPage';
>>>>>>> b1a52b8... challenge page design
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
<<<<<<< HEAD
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/challenge-setting" />
        <Route path="/challenge" component={Challenge} />
=======
        <Route exact path="/register" />
        <Route exact path="/login" />
        <Route exact path="/admin" component={AdminPage}/>
<<<<<<< HEAD
        <Route path="/challange" />
>>>>>>> b1a52b8... challenge page design
=======
        <Route path="/challenge" />
>>>>>>> 20fa087... fetch working
        <Route exact path="/">
            {tokenExists() ? <Redirect to="/challenge" /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
