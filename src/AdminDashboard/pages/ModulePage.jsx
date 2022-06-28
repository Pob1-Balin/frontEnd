import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import ModulesPageContent from '../Admin-body-content/ModulesPageContent';

function ModulePage() {
  return (
    <>
      <AdminUserSidebar/>
      <main>
         <ModulesPageContent display="admin"/>
      </main>
    </>
  );
}

export default ModulePage;
