import React from 'react';
import AdminDashboardSidebar from '../components/AdminUserSidebar';
import AdminSelectService from '../components/AdminSelectService';
import EditQuestionContent from '../Admin-body-content/EditQuestionContent';

function EditQuestionPage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <AdminSelectService/>
      <main>
        <EditQuestionContent/>
      </main>
    </>
  );
}

export default EditQuestionPage;
