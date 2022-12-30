import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import EditServiceContent from '../Admin-body-content/EditServiceContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function EditServicePage() {
  const auth = JSON.parse(localStorage.getItem("redirecteditserv"));
  return (
    <>
      {auth ?
        <>
          <AdminDashboardSidebar/>
          <main>
            <EditServiceContent/>
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default EditServicePage;
