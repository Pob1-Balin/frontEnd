import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import ResourceContent from '../body-content/ResourcesContent';

function ResourcePage() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <ResourceContent/>
      </main>
    </>
  );
}

export default ResourcePage;
