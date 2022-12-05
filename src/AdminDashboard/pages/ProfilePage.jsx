import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import ProfilePageContent from '../Admin-body-content/ProfilePageContent';

function ProfilePage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
        <ProfilePageContent/>
      </main>
    </>
  );
}

export default ProfilePage;
