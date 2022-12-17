import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import LegalPageNoticeContent from '../../CommonPageContents/LegalNoticePageContent';

function LegalNoticePage() {
  return (
    <>
      <AdminSidebar/>
      <main className=''>
         <LegalPageNoticeContent display="admin"/>
      </main>
    </>
  );
}

export default LegalNoticePage;
