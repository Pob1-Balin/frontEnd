import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditUnitContent from '../Admin-body-content/EditUnitContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function EditUnitPage(){
  const auth = JSON.parse(localStorage.getItem("redirecteditserv"));
  return (
    <>
      {auth ?
        <>
        <AdminSidebar/>
          <main>
            <EditUnitContent />
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default EditUnitPage;