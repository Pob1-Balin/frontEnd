import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import EditAdminContent from '../Admin-body-content/EditAdminContent';

function EditAdminProfilePage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
         <EditAdminContent/>
      </main>
    </>
  );
}

export default EditAdminProfilePage;
