import React from 'react';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import AddStructureTwoContent from '../Admin-body-content/AddStructureTwoContent';
import ToggleButton from '../../unitsDashboard/components/ToggleButton2'
import AddModel from '../../unitsDashboard/components/AddModel';

function AddStructureTwoPage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <AddStructureTwoContent/>
            </div>
        </div>
    </div>

  );
}

export default AddStructureTwoPage;
