import React from 'react'
import AddModel from '../components/AddModel';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import StructureTwoContent from '../../CommonPageContents/StructureTwoContent';

function AdminStructureTwo(){
    return(
        <>
            <div className="">
                <AdminSidebarLinks/>
                <AddModel/>
                <div id="BodyContent" style={{marginLeft:'18rem', paddingTop:"0rem"}}>
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