import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddStructureOneContent from '../Admin-body-content/AddStructureOneContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';
import { useLocation } from 'react-router-dom'
import EditAdminSidebarLinks from '../components/EditAdminSidebarLinks';

function AddStructureOnePage() {
  const location = useLocation();
  const unitId = location.state;
  return (
    <div className="">
        <EditAdminSidebarLinks unitsId={unitId.id}/>
        <AddModel unitsId={unitId.id}/>
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
