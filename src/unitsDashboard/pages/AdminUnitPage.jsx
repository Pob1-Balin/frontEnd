import React from 'react'
import UnitHomeContent from '../Units-body-contents/UnitHomeContent';
import ToggleButton from '../components/toggleButton';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddModel from '../components/AddModel';

function AdminUnitPage(){
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
                         <UnitHomeContent show="admin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUnitPage;