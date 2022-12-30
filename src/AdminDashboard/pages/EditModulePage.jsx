import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditModuleContent from '../Admin-body-content/EditModuleContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function EditModulePage() {
  const auth = JSON.parse(localStorage.getItem("redirecteditserv"));
  return (
    <>
      {auth ?
        <>
          <AdminSidebar/>
          <main>
            <EditModuleContent/>
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default EditModulePage;