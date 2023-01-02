import React from 'react';
import Sidebar from '../components/Sidebar';
import TestPageContent from '../body-content/TestPageContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function TestPage() {
  const auth = JSON.parse(localStorage.getItem("redirectunit"));
  return (
    <>
    {auth ?
      <>
        <Sidebar/>
        <main>
          <TestPageContent/>
        </main>
      </>
      :
      <NotFoundPage/>
    }
      
    </>
  );
}
export default TestPage;
