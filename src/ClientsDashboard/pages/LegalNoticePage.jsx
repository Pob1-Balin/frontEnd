import React from 'react';
import Sidebar from '../components/Sidebar';
import LegalNoticeContent from '../../CommonPageContents/LegalNoticePageContent';
import SelectService from '../components/SelectService';

function LegalNoticePage() {
  return (
    <>
      <Sidebar/>
      <SelectService/>
      <main className='Legalmoticepage'>
         <LegalNoticeContent display="clients"/>
      </main>
    </>
  );
}

export default LegalNoticePage;
