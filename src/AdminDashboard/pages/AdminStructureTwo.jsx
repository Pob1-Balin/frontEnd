import React from 'react'
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import StructureTwoContent from '../../CommonPageContents/StructureTwoContent';

function AdminStructureTwo(){
    return(
        <>
            <div className="">
                <AdminSidebarLinks/>
                <div id="BodyContent" style={{marginLeft:'18rem', paddingTop:"0rem"}}>
                    <div className="container-fluid">
                        <StructureTwoContent show="admin"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStructureTwo;