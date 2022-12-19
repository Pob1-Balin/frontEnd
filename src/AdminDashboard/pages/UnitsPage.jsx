import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import UnitsPageContent from '../../CommonPageContents/UnitsPageContent';
import AdminSelectService from '../components/AdminSelectService';
import NotFoundPage from '../../CommonPageContents/notFound';
function UnitsPage() {
  const auth = JSON.parse(localStorage.getItem("redirectmod"));
  return (
    <>
    {auth ?
      <>
        <AdminUserSidebar/>
        <AdminSelectService/>
        <main>
          <UnitsPageContent display="admin"/>
        </main>
      </> 
      :
      <NotFoundPage/>
    }
    </>
  );
}

export default UnitsPage;
