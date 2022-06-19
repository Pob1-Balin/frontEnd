import React from 'react'
import StructureOneContent from '../Units-body-contents/StructureOneContent';
import ToggleButton from '../components/toggleButton';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddModel from '../components/AddModel';

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