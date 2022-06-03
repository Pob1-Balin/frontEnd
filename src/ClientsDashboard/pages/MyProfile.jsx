import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileContent from '../body-content/ProfileContent';

function MyProfile() {
  return (
    <>
      <Sidebar/>
      <main>
        <ProfileContent/>
      </main>
    </>
  );
}

export default MyProfile;
