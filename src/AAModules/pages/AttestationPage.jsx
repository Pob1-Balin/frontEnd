import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AttestationContent from '../body-content/AttestationContent';

function AttestationPage() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <AttestationContent/>
      </main>
    </>
  );
}

export default AttestationPage;
