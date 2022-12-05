import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import AddServiceContent from '../Admin-body-content/AddServiceContent';

function AddServicePage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
         <AddServiceContent/>
      </main>
    </>
  );
}

export default AddServicePage;
