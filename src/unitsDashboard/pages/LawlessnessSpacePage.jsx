import React from 'react'
import UnitSidebar from '../components/Sidebar';
import LawlessnessSpaceContent from '../Units-body-contents/LawlessnessSpaceContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function LawlessnessSpacePage(){
    return(
        <>
            <div className="d-flex px-0" id="wrapper">
                <SidebarLinks/>  
                <div id="page-content-wrapper">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <LawlessnessSpaceContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LawlessnessSpacePage;