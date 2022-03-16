import React from 'react'
import UnitSidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import TechnologiesContent from '../Units-body-contents/TechnologiesContent';

function TechnologiesPage(){
    return(
        <>
            {/* <UnitSidebar/>
            <main>
                <TechnologiesContent />
            </main> */}

            <div className="d-flex" id="wrapper">
                <SidebarLinks/>  
                <div id="page-content-wrapper">
                    <ToggleButton/>
                    <div className="container-fluid">
                        <TechnologiesContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologiesPage;