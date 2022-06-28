import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import UnitsPageContent from '../Admin-body-content/UnitsPageContent';
import AdminSelectService from '../components/AdminSelectService';

function UnitsPage() {
  return (
    <>
      <AdminUserSidebar/>
      <AdminSelectService/>
      <main>
         <UnitsPageContent display="admin"/>
      </main>
    </>
  );
}

export default UnitsPage;
