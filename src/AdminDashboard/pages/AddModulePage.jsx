import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AddModuleContent from '../Admin-body-content/AddModuleContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function AddModulePage() {
  const auth = JSON.parse(localStorage.getItem("redirectaddserv"));
  return (
    <>
      {auth ?
        <>
          <AdminSidebar/>
          <main>
            <AddModuleContent />
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default AddModulePage;
