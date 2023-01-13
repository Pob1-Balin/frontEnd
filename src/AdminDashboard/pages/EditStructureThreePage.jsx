import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import EditStructureThreeContent from '../Admin-body-content/EditStructureThreeContent';
function EditStructureThreePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div className="container-fluid px-0">
               <EditStructureThreeContent/>
            </div>
        </div>
    </div>

  );
}

export default EditStructureThreePage;
