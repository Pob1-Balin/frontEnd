import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileContent from '../body-content/ProfileContent';
import SelectService from '../components/SelectService';

function MyProfile() {
  return (
    <>
      <Sidebar/>
      <SelectService/>
      <main>
        <ProfileContent/>
      </main>
    </>
  );
}

export default MyProfile;
