import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import EditStructureOneContent from '../Admin-body-content/EditStructureOneContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';

function EditStructureOnePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
          <div className="container-fluid px-0">
              <EditStructureOneContent/>
          </div>
        </div>
    </div>
  );
}

export default EditStructureOnePage;
