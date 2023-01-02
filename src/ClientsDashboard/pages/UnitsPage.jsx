import React from 'react';
import Sidebar from '../components/Sidebar';
import UnitsPageContent from '../../CommonPageContents/UnitsPageContent';
import NotFoundPage from '../../CommonPageContents/notFound';

function UnitsPage() {
  const auth = JSON.parse(localStorage.getItem("redirectmod"));
  return (
    <>
    {auth ?
      <>
        <Sidebar/>
        <main>
          <UnitsPageContent display="clients"/>
        </main>
      </> 
      :
      <NotFoundPage/>
    }
    </>
  );
}

export default UnitsPage;
