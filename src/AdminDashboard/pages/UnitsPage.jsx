import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import UnitsPageContent from '../Admin-body-content/UnitsPageContent';

function UnitsPage() {
  return (
    <>
      <AdminUserSidebar/>
      <main>
         <UnitsPageContent display="admin"/>
      </main>
    </>
  );
}

export default UnitsPage;
