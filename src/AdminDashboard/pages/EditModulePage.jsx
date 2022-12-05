import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditModuleContent from '../Admin-body-content/EditModuleContent';

function EditModulePage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <EditModuleContent/>
      </main>
    </>
  );
}

export default EditModulePage;
