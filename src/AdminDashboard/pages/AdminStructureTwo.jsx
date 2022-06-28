import React from 'react'
import AddModel from '../../unitsDashboard/components/AddModel';
import AdminSidebarLinks from '../../unitsDashboard/components/AdminSidebarLinks';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import StructureTwoContent from '../../unitsDashboard/Units-body-contents/StructureTwoContent';

function AdminStructureTwo(){
    return(
        <>
            <div className="">
                <AdminSidebarLinks/>
                <AddModel/>
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <ToggleButton/>
                    <div className="container-fluid">
                        <StructureTwoContent show="admin"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStructureTwo;