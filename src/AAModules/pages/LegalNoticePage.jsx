import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import LegalNoticeContent from '../body-content/LegalNoticeContent';

function LegalNoticePage() {
  return (
    
    <>
      <AdminSidebar/>
      <main className='Legalmoticepage'>
        <LegalNoticeContent/>
      </main>
    </>
  );
}

export default LegalNoticePage;
