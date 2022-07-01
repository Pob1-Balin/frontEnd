import React from 'react';
import AdminUserSidebar from '../components/AdminUserSidebar';
import UnitsPageContent from '../../CommonPageContents/UnitsPageContent';
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
