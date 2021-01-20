import React, { useState } from 'react';
import CreateChallenge from '../components/AdminChallenge/CreateChallenge';
import EditChallenge from '../components/AdminChallenge/EditChallenge';
import '../styles/AdminPage.css';

function AdminPage() {
  const [isChallenge, setIsChallenge] = useState(false);

  return (
    <div className='admin-main-container'>
      {isChallenge ? <EditChallenge /> : <CreateChallenge />}
    </div>
  );
}

export default AdminPage;
