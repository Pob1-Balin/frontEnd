import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddStructureTwoContent from '../Admin-body-content/AddStructureTwoContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';

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
