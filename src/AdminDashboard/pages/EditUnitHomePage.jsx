import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';
import EditUnitHomeContent from '../Admin-body-content/EditUnitHomeContent';

function EditUnitHomePage() {
  return (
    <div className="">
        <AdminSidebarLinks/>
        <AddModel/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div>
                <ToggleButton />
            </div>
            <div className="container-fluid px-0">
               <EditUnitHomeContent/>
            </div>
        </div>
    </div>

  );
}

export default EditUnitHomePage;
