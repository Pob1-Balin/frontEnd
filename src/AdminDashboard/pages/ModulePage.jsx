import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import ModulesPageContent from '../../CommonPageContents/ModulesPageContent';
import AdminSelectService from '../components/AdminSelectService';
import NotFoundPage from '../../CommonPageContents/notFound';

function ModulePage() {
  const auth =     JSON.parse(localStorage.getItem("redirectserv"));
  return (
    <>
    {auth ?
      <>
        <AdminUserSidebar/>
        <AdminSelectService/>
        <main>
          <ModulesPageContent display="admin"/>
        </main>
      </>
      :
      <NotFoundPage/>
    
    }
    </>
  );
}

export default ModulePage;
