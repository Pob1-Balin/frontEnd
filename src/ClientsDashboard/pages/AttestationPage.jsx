import React from 'react';
import Sidebar from '../components/Sidebar';
import AttestationContent from '../body-content/AttestationContent';
import { useLocation } from 'react-router-dom';

function AttestationPage() {
  const location = useLocation();
  const service_id = location.state;
  return (
    <>
       <Sidebar service_id={service_id}/>
       <main>
         <AttestationContent/>
       </main>
    </>
  );
}

export default AttestationPage;
