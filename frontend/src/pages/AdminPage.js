import React from 'react';
import { useSelector } from 'react-redux';
import CreateChallenge from '../components/AdminChallenge/CreateChallenge';
import EditChallenge from '../components/AdminChallenge/EditChallenge';
import '../styles/AdminPage.css';
import { render } from 'react-dom';
import {
  transitions,
  types,
  positions,
  Provider as AlertProvider,
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function AdminPage() {
  const challenge = useSelector((state) => state.challenge.challenge);
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    type: types.ERROR,
    transition: transitions.SCALE,
  };
  return (
    <div className='admin-main-container'>
      {/* {challenge ? <EditChallenge /> : <CreateChallenge />} */}
      <AlertProvider template={AlertTemplate} {...options}>
        <CreateChallenge />
      </AlertProvider>
    </div>
  );
}

export default AdminPage;
