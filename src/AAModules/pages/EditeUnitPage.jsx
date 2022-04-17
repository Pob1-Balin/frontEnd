import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import EditUnitContent from '../body-content/EditUnitContent';

function EditeUnitPage(){
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <EditUnitContent />
      </main>
    </>
  );
}

export default EditeUnitPage;
