import React, { useState } from 'react';
import CreateChallenge from './CreateChallenge';
import EditChallenge from './EditChallenge';
import './AdminPage.css';

function AdminPage() {
  const [isChallenge, setIsChallenge] = useState(false);

  return (
    <div className='admin-main-container'>
      {isChallenge ? <EditChallenge /> : <CreateChallenge />}
    </div>
  );
}

export default AdminPage;
