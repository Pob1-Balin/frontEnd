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
            <div className="d-flex" id="wrapper">
            <SidebarLinks/>  
            
        

<div id="page-content-wrapper">
                <ToggleButton/>
                <div className="container-fluid">
                    <h1 className="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked. lorem1000
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default UnitHome;