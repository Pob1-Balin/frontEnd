import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditResourceContent from '../Admin-body-content/EditResourceContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function EditRourcePage() {
  const auth = JSON.parse(localStorage.getItem("redirecteditserv"));
  return (
    <>
      {auth ?
        <>
          <AdminSidebar/>
          <main>
            <EditResourceContent/>
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default EditRourcePage;