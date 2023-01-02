import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../../CommonPageContents/ModulesPageContent';
import { useLocation } from 'react-router-dom';
import NotFoundPage from '../../CommonPageContents/notFound'
function HomePage() {
  const location = useLocation();
  const service_id = location.state;
  const auth =     JSON.parse(localStorage.getItem("redirectserv"));
  return (
    <>
    {auth ?
      <>
       <Sidebar service_id={service_id}/>
       <main>
         <HomeContent display="clients"/>
       </main>
      </>
      :
      <NotFoundPage/>
    
    }
    </>
  );
};

export default HomePage;
