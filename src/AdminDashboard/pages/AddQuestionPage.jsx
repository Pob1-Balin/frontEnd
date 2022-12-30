import React from 'react';
import AdminDashboardSidebar from '../components/AdminUserSidebar';
import AddQuestionContent from '../Admin-body-content/AddQuestionContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function AddQuestionPage() {
  const auth = JSON.parse(localStorage.getItem("redirectaddserv"));
  return (
    <>
      {auth ?
        <>
            <AdminDashboardSidebar/>
            <main style={{marginBottom:"0rem"}}>
              <AddQuestionContent/>
            </main>
        </>
        :
        <NotFoundPage/>
      }
    </>
  );
}

export default AddQuestionPage;


