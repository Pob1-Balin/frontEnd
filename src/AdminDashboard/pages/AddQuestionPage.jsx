import React from 'react';
import AdminDashboardSidebar from '../components/AdminUserSidebar';
import AddQuestionContent from '../Admin-body-content/AddQuestionContent';
import AdminSelectService from '../components/AdminSelectService';

function AddQuestionPage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <AdminSelectService/>
      <main>
         <AddQuestionContent/>
      </main>
    </>
  );
}

export default AddQuestionPage;
