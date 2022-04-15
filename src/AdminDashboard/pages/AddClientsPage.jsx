import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import AddClientsContent from '../Admin-body-content/AddClientsContent';


function AddClientsPage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
        <AddClientsContent/>
      </main>
    </>
  );
}

export default AddClientsPage;
