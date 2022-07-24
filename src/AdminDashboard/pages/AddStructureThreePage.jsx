import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddStructureThreeContent from '../Admin-body-content/AddStructureThreeContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';

function AddStructureThreePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <AddStructureThreeContent/>
            </div>
        </div>
    </div>

  );
}

export default AddStructureThreePage;
