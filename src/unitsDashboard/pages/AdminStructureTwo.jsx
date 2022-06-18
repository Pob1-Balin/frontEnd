import React from 'react'
import AddModel from '../components/AddModel';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import ToggleButton from '../components/toggleButton';
import StructureTwoContent from '../Units-body-contents/StructureTwoContent';

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