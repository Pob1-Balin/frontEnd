import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import EditServiceContent from '../Admin-body-content/EditServiceContent';

function EditServicePage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
         <EditServiceContent/>
      </main>
    </>
  );
}

export default EditServicePage;
