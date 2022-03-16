import React from 'react'
import UnitSidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import IntroductionContent from '../Units-body-contents/IntroductionContent';
import HeaderSection from '../components/FooterSection';

function IntroductionPage(){
    return(
        <>
            {/* <UnitSidebar/>
            <main>
                <IntroductionContent />
            </main> */}

            <div className="d-flex px-0" id="wrapper">
                <SidebarLinks/>  
                <div id="page-content-wrapper">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <IntroductionContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroductionPage;