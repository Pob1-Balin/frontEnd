import React from 'react';
import Sidebar from '../components/Sidebar';
import LegalNoticeContent from '../body-content/LegalNoticeContent';

function LegalNoticePage() {
  return (
    
    <>
      <Sidebar/>
      <main className='Legalmoticepage'>
        <LegalNoticeContent/>
      </main>
    </>
  );
}

export default LegalNoticePage;
