import React from 'react'
import UnitSidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import CyberSpacesContent from '../Units-body-contents/CyberSpacesContent';

function CyberSpacesPage(){
    return(
        <>
            {/* <UnitSidebar/>
            <main>
                <CyberSpacesContent />
            </main> */}

<div className="d-flex px-0" id="wrapper">
                <SidebarLinks/>  
                <div id="page-content-wrapper">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <CyberSpacesContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CyberSpacesPage;