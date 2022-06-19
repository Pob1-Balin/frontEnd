import React from 'react';
import Sidebar from '../components/Sidebar';
import AttestationContent from '../body-content/AttestationContent';
import SelectService from '../components/SelectService';

function AttestationPage() {
  return (
    <>
       <Sidebar/>
       <SelectService/>
       <main>
         <AttestationContent/>
       </main>
    </>
  );
}

export default AttestationPage;
