import React from 'react'
import StructureThreeContent from '../../unitsDashboard/Units-body-contents/StructureThreeContent';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import AddModel from '../../unitsDashboard/components/AddModel';

function AdminStructureThree(){
    return(
        <>
            <div className="">
                <AdminSidebarLinks/>
                <AddModel/>
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <div>
                         <ToggleButton />
                    </div>
                    <div className="container-fluid px-0">
                         <StructureThreeContent show="admin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStructureThree;