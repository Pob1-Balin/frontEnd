import React from 'react';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import EditStructureOneContent from '../Admin-body-content/EditStructureOneContent';
import ToggleButton from '../../unitsDashboard/components/ToggleButton2'
import AddModel from '../../unitsDashboard/components/AddModel';

function EditStructureOnePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <EditStructureOneContent/>
            </div>
        </div>
    </div>
    
  );
}

export default EditStructureOnePage;
