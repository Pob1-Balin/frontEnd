import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import Module1Content from '../body-content/Module1Content';
import AdminUnits from '../body-content/unitsContent';

function UnitsPage() {
  return (
    
    <>

      <AdminSidebar/>
      <main>
      <AdminUnits/>
      </main>
      
    </>
  );
}

export default UnitsPage;
