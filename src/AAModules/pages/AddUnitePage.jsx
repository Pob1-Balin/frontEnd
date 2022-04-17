import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AddUnitContent from '../body-content/AddUnitContent';

function AddUnitePage() {
  return (
    
    <>
      <AdminSidebar/>
      <main>
        <AddUnitContent />
      </main>
    </>
  );
}

export default AddUnitePage;
