import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AddUnitContent from '../Admin-body-content/AddUnitContent';

function AddUnitPage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <AddUnitContent />
      </main>
    </>
  );
}

export default AddUnitPage;
