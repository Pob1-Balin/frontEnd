import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import EditModuleContent from '../body-content/EditModuleContent';

function EditModulePage() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <EditModuleContent />
      </main>
    </>
  );
}

export default EditModulePage;
