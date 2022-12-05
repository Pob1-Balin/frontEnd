import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AddModuleContent from '../Admin-body-content/AddModuleContent';

function AddModulePage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <AddModuleContent />
      </main>
    </>
  );
}

export default AddModulePage;
