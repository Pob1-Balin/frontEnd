import React from 'react'
import { useLocation } from 'react-router-dom';
import StructureOneContent from '../../CommonPageContents/StructureOneContent';
import ToggleButton from '../../unitsDashboard/components/toggleButton';
import AdminSidebarLinks from '../components/AdminSidebarLinks';
import AddModel from '../components/AddModel';
// import UnitContentNavigations from './navigationsForUnitsContent/UnitContentNavigations';

function AdminStructureOne(){
    const location = useLocation();
    const unitId = location.state;
    return(
        <>
            <div className="">
                <AdminSidebarLinks/>
                <AddModel unitsId={unitId.id}/>
                <div id="BodyContent" style={{marginLeft:'18rem', paddingTop:"0rem"}}>
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