import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import ProfileContent from '../body-content/ProfileContent';

function MyProfile() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <ProfileContent/>
      </main>
    </>
  );
}

export default MyProfile;
