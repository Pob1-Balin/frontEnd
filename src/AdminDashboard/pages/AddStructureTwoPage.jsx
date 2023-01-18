import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddStructureTwoContent from '../Admin-body-content/AddStructureTwoContent';
import ToggleButton from '../components/ToggleButton2'
import AddModel from '../components/AddModel';
import { useLocation } from 'react-router-dom';

function AddStructureTwoPage() {
  const location = useLocation();
  const unitId = location.state;
  return (
    <div className="">
        <AdminSidebarLinks unitsId={unitId.id}/>
        <AddModel unitsId={unitId.id}/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
            <div className="container-fluid px-0">
               <AddStructureTwoContent/>
            </div>
        </div>
    </div>

  );
}

export default AddStructureTwoPage;
