import React from 'react';
import Sidebar from '../components/Sidebar';
import ResourceContent from '../body-content/ResourcesContent';

function ResourcePage() {
  return (
    <>
      <Sidebar/>
      <main>
        <ResourceContent display="clients"/>
      </main>
    </>
  );
}

export default ResourcePage;
