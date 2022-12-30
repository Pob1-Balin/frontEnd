import React from 'react';
import AdminDashboardSidebar from '../components/AdminDashboardSidebar';
import AddServiceContent from '../Admin-body-content/AddServiceContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function AddServicePage() {
  const auth = JSON.parse(localStorage.getItem("redirectaddserv"));
  return (
    <>
    {auth ?
      <>
        <AdminDashboardSidebar/>
        <main>
          <AddServiceContent/>
        </main>
      </>
      :
      <NotFoundPage/>
    }
    </>
  );
}

export default AddServicePage;

