import React from 'react';
import AdminDashboardSidebar from '../components/AdminUserSidebar';
import AddQuestionContent from '../Admin-body-content/AddQuestionContent';

function AddQuestionPage() {
  return (
    <>
      <AdminDashboardSidebar/>
      <main>
         <AddQuestionContent/>
      </main>
    </>
  );
}

export default AddQuestionPage;
