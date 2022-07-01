import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import EditStructureTwoContent from '../Admin-body-content/EditStructureTwoContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';

function EditStructureTwoPage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <EditStructureTwoContent/>
            </div>
        </div>
    </div>

  );
}

export default EditStructureTwoPage;
