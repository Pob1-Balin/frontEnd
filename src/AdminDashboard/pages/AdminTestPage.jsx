import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AdminTestPageContent from '../Admin-body-content/AdminTestPageContent';
import AdminSelectService from "../components/AdminSelectService";
import NotFoundPage from '../../CommonPageContents/notFound';

function AdminTestPage() {
  const auth = JSON.parse(localStorage.getItem("redirectunit"));
  return (
    <>
    {auth ?
      <>
        <AdminSidebar/>
        <AdminSelectService/>
        <main>
          <AdminTestPageContent />
        </main>
      </>
      :
      <NotFoundPage/>
    }
    </>
  );
}

export default AdminTestPage;
