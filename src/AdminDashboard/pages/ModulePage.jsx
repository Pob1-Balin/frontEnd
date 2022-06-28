import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import ModulesPageContent from '../Admin-body-content/ModulesPageContent';
import AdminSelectService from '../components/AdminSelectService';

function ModulePage() {
  return (
    <>
      <AdminUserSidebar/>
      <AdminSelectService/>
      <main>
         <ModulesPageContent display="admin"/>
      </main>
    </>
  );
}

export default ModulePage;
