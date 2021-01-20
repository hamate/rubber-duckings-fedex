import React from 'react';
import { useSelector } from 'react-redux';
import CreateChallenge from '../components/AdminChallenge/CreateChallenge';
import EditChallenge from '../components/AdminChallenge/EditChallenge';
import '../styles/AdminPage.css';

function AdminPage() {
  const challenge = useSelector((state) => state.challenge.challenge)

  return (
    <div className='admin-main-container'>
      {/* {challenge ? <EditChallenge /> : <CreateChallenge />} */}
      <CreateChallenge />
    </div>
  );
}

export default AdminPage;
