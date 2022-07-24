import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditResourceContent from '../Admin-body-content/EditResourceContent';

function EditRourcePage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <EditResourceContent/>
      </main>
    </>
  );
}

export default EditRourcePage;
