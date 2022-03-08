import React from 'react';
import Sidebar from '../components/Sidebar';
import ResourceContent from '../body-content/ResourcesContent';

function ResourcePage() {
  return (
    
    <>
      {/* <Header/>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar/>
          <ResourceContent/>
        </div>
      </div> */}

      <Sidebar/>
      <main>
        <ResourceContent/>
      </main>
    </>
  );
}

export default ResourcePage;
