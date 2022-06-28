import React from 'react';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import AddStructureOneContent from '../Admin-body-content/AddStructureOneContent';
import ToggleButton from '../../unitsDashboard/components/ToggleButton2'
import AddModel from '../../unitsDashboard/components/AddModel';

function AddStructureOnePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <AddStructureOneContent/>
            </div>
        </div>
    </div>
    
  );
}

export default AddStructureOnePage;
