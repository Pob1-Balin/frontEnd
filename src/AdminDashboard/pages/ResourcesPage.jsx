import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import ResourcesPageContent from '../../ClientsDashboard/body-content/ResourcesContent';

function ResourcesPage() {
  return (
    <>
      <AdminSidebar/>
      <main>
         <ResourcesPageContent display="admin"/>
      </main>
    </>
  );
}

export default ResourcesPage;
