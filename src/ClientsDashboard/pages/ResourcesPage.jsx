import React from 'react';
import Sidebar from '../components/Sidebar';
import ResourceContent from '../body-content/ResourcesContent';
import SelectService from '../components/SelectService';

function ResourcePage() {
  return (
    <>
      <Sidebar/>
      <SelectService/>
      <main>
        <ResourceContent display="clients"/>
      </main>
    </>
  );
}

export default ResourcePage;
