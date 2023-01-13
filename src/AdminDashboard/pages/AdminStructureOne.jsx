import React from 'react'
import { useLocation } from 'react-router-dom';
import StructureOneContent from '../../CommonPageContents/StructureOneContent';
import AdminSidebarLinks from '../components/AdminSidebarLinks';

function AdminStructureOne(){
    const location = useLocation();
    const unitId = location.state;
    return(
        <>
            <div className="">
                <AdminSidebarLinks unitsId={unitId.id}/>
                <div id="BodyContent" style={{marginLeft:'18rem', paddingTop:"0rem"}}>
                    <div className="container-fluid px-0">
                         <StructureOneContent show="admin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStructureOne;