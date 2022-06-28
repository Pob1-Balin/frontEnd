import React from 'react';
import Sidebar from '../components/Sidebar';
import UnitsPageContent from '../../AdminDashboard/Admin-body-content/UnitsPageContent';

function UnitsPage() {
  return (
    <>
      <Sidebar/>
      <main>
         <UnitsPageContent display="clients"/>
      </main>
    </>
  );
}

export default UnitsPage;
