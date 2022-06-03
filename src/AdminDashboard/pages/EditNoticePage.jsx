import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditNoticeContent from '../Admin-body-content/EditNoticeContent';

function EditNoticePage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <EditNoticeContent/>
      </main>
    </>
  );
}

export default EditNoticePage;
