import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../../AdminDashboard/Admin-body-content/ModulesPageContent';

function HomePage() {
  return (
    <>
       <Sidebar/>
       <main>
         <HomeContent display="clients"/>
       </main>
    </>
  );
}

export default HomePage;
