import React from 'react';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import EditStructureThreeContent from '../Admin-body-content/EditStructureThreeContent';
import ToggleButton from '../../unitsDashboard/components/ToggleButton2'
import AddModel from '../../unitsDashboard/components/AddModel';

function EditStructureThreePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <EditStructureThreeContent/>
            </div>
        </div>
    </div>

  );
}

export default EditStructureThreePage;
