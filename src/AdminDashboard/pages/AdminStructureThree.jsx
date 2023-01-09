import React from 'react'
import StructureThreeContent from '../../CommonPageContents/StructureThreeContent';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddModel from '../components/AddModel';
function AdminStructureThree(){
    return(
        <>
            <div className="">
                <AdminSidebarLinks/>
                <AddModel/>
                <div id="BodyContent" style={{marginLeft:'18rem', paddingTop:"0rem"}}>
                    <div>
                         <ToggleButton/>
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