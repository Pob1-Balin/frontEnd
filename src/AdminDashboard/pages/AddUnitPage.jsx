import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AddUnitContent from '../Admin-body-content/AddUnitContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function AddUnitPage() {
  const auth = JSON.parse(localStorage.getItem("redirectaddserv"));
  return (
    <>
      {auth ?
        <>
        <AdminSidebar/>
          <main>
          <AddUnitContent />
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default AddUnitPage;