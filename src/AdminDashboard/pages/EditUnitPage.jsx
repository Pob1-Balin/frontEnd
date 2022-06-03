import React from 'react';
import AdminSidebar from '../components/AdminUserSidebar';
import EditUnitContent from '../Admin-body-content/EditUnitContent';

function EditUnitPage(){
  return (
    <>
      <AdminSidebar/>
      <main>
         <EditUnitContent />
      </main>
    </>
  );
}

export default EditUnitPage;
