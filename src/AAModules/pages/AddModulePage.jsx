import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AddModuleContent from '../body-content/AddModuleContent';

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
