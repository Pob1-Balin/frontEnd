import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import EditNoticeContent from '../body-content/EditNoticeContent';

function AddModulePage() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <EditNoticeContent/>
      </main>
    </>
  );
}

export default AddModulePage;
