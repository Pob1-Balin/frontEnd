import React from 'react'
import UnitHomeContent from '../../CommonPageContents/UnitHomeContent';
import AddModel from '../components/AddModel';
import { useLocation } from "react-router-dom";

function AdminUnitPage(){
    const location = useLocation();
    const unitId = location.state;
    return(
        <>
            <div className="">
                <AddModel unitsId={unitId.id} module_name={unitId.module_name} module_title={unitId.module_title}/>
                <div id="BodyContent" style={{paddingTop:"0rem", marginTop:"0rem"}}>
                    <div className="container-fluid px-0">
                         <UnitHomeContent unitsId={unitId.id} show="admin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUnitPage;