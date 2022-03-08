import React from 'react';
import Sidebar from '../components/Sidebar';
import AttestationContent from '../body-content/AttestationContent';

function AttestationPage() {
  return (
    
    <>
      {/* <Header/>
      <div className='container-fluid'>
        <div className='row' style={{backgroundColor: "#f4f7f8"}}>
          <Sidebar/>
          <AttestationContent/>
        </div>
      </div> */}

      <Sidebar/>
      <main>
        <AttestationContent/>
      </main>
    </>
  );
}

export default AttestationPage;
