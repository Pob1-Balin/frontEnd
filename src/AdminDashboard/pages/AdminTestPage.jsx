import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import AdminTestPageContent from '../Admin-body-content/AdminTestPageContent';
import AdminSelectService from "../components/AdminSelectService";

function AdminTestPage() {
  return (
    <>
      <AdminSidebar/>
      <AdminSelectService/>
      <main>
         <AdminTestPageContent />
      </main>
    </>
  );
}

export default AdminTestPage;
