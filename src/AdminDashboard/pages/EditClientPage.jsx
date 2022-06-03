import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import EditClientContent from '../Admin-body-content/EditClientContent';

function EditClientPage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
         <EditClientContent/>
      </main>
    </>
  );
}

export default EditClientPage;
