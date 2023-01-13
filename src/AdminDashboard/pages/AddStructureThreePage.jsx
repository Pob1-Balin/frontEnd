import React from 'react';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddStructureThreeContent from '../Admin-body-content/AddStructureThreeContent';
import { useLocation } from 'react-router-dom';

function AddStructureThreePage() {
  const location = useLocation();
  const unitId = location.state;
  return (
    <div className="">
        <AdminSidebarLinks unitsId={unitId.id}/>
        <div id="BodyContent" style={{marginLeft:'18rem'}}>
          <div className="container-fluid px-0">
              <AddStructureThreeContent/>
          </div>
        </div>
    </div>

  );
}

export default AddStructureThreePage;
