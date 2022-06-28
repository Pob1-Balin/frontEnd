import React from 'react';
import Sidebar from '../components/Sidebar';
import LegalNoticeContent from '../../AdminDashboard/Admin-body-content/LegalNoticePageContent';

function LegalNoticePage() {
  return (
    <>
      <Sidebar/>
      <main className='Legalmoticepage'>
         <LegalNoticeContent display="clients"/>
      </main>
    </>
  );
}

export default LegalNoticePage;
