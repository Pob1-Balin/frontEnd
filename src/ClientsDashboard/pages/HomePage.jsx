import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../../CommonPageContents/ModulesPageContent';
import SelectServices from '../components/SelectService';
import { useLocation } from 'react-router-dom';
function HomePage() {
  const location = useLocation();
  const service_id = location.state;
  return (
    <>
       <Sidebar service_id={service_id}/>
       <SelectServices/>
       <main>
         <HomeContent display="clients"/>
       </main>
    </>
  );
}

export default HomePage;
