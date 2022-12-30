import React from 'react';
import AdminDashboardSidebar from '../components/AdminUserSidebar';
import EditQuestionContent from '../Admin-body-content/EditQuestionContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function EditQuestionPage() {
  const auth = JSON.parse(localStorage.getItem("redirecteditserv"));
  return (
    <>
      {auth ?
        <>
          <AdminDashboardSidebar/>
          <main>
            <EditQuestionContent/>
          </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default EditQuestionPage;

