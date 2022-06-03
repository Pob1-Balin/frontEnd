import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import LegalPageNoticeContent from '../Admin-body-content/LegalNoticePageContent';

function LegalNoticePage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <LegalPageNoticeContent display="admin"/>
      </main>
    </>
  );
}

export default LegalNoticePage;
