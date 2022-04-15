import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import EditResourceContent from '../body-content/EditResourceContent';

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
