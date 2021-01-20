import React from 'react';
import { 
  useSelector, 
  useDispatch 
} from 'react-redux';
import './Menu.css';
import logo from '../../assets/accepted-logo.svg';
import { sessionLogout } from '../../redux/session/session.actions';

function Menu() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.user.isAdmin);

  function logOut() {
    dispatch(sessionLogout());
  }

  return (
    <div class="menu">
      <img src={logo} alt="accepted logo" className="logo" />

      <div className="nav-btns">
        <div className="commitments-btn btn">
          <a href="/challenge/commitments" >Commitments</a>
        </div>

        <div className="overview-btn btn">
          <a href="/challenge/overview" >Overview</a>
        </div>

        <div className="statistics-btn btn">
        <a href="/challenge/statistics" >Statistics</a>
        </div>
        
        { 
        isAdmin ?
        (<div className="setting-btn btn">
          <a href="/admin" >Settings</a>
        </div>) : 
        null
        }
      </div>

      <div className="logout-btn btn">
        <a href="/" onClick={() => logOut()} >Logout</a>
      </div>
    </div>
  )
}

export default Menu;