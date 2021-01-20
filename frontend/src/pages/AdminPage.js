import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateChallenge from '../components/AdminChallenge/CreateChallenge';
import EditChallenge from '../components/AdminChallenge/EditChallenge';
import { getChallenge } from '../redux/challenge/challenge.action';
import '../styles/AdminPage.css';
import {
  transitions,
  types,
  positions,
  Provider as AlertProvider,
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function AdminPage() {
  const dispatch = useDispatch();
  const challenge = useSelector((state) => state.challenge.challenge)

  useEffect(() => {
    dispatch(getChallenge());
  }, [dispatch]);

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
      <AlertProvider template={AlertTemplate} {...options}>
        {Object.entries(challenge).length > 1 ? <EditChallenge /> : <CreateChallenge />}
      </AlertProvider>
    </div>
  );
}

export default AdminPage;
