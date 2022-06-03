import React from 'react';
import Sidebar from '../components/Sidebar';
import AttestationContent from '../body-content/AttestationContent';

function AttestationPage() {
  return (
    <>
       <Sidebar/>
       <main>
         <AttestationContent/>
       </main>
    </>
  );
}

export default AttestationPage;
