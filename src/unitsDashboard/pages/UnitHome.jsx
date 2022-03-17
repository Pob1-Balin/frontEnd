import React from 'react'
import UnitSidebar from '../components/Sidebar';
import UnitHomeContent from '../Units-body-contents/UnitHomeContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function UnitHome(){
    return(
        <>
            {/* <UnitSidebar/> */}
            {/* <main>
                <UnitHomeContent />
            </main> */}
            <div className="d-flex px-0" id="wrapper">
                <SidebarLinks/>  
                <div id="page-content-wrapper">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <UnitHomeContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnitHome;