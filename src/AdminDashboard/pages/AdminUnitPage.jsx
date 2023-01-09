import React from 'react'
import UnitHomeContent from '../../CommonPageContents/UnitHomeContent';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddModel from '../components/AddModel';
import { useLocation } from "react-router-dom";

function AdminUnitPage(){
    const location = useLocation();
    const unitId = location.state;
    return(
        <>
            <div className="">
                {/* <AdminSidebarLinks/> */}
                <AddModel unitsId={unitId.id}/>
                <div id="BodyContent" style={{paddingTop:"0rem", marginTop:"0rem"}}>
                    {/* <div>
                        <ToggleButton />
                    </div> */}
                    <div className="container-fluid px-0">
                         <UnitHomeContent unitsId={unitId.id} show="admin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUnitPage;