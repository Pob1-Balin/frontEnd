import React from 'react'
import StructureOneContent from '../../unitsDashboard/Units-body-contents/StructureOneContent';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import AddModel from '../../unitsDashboard/components/AddModel';

function AdminStructureOne(){
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
                         <StructureOneContent show="admin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStructureOne;