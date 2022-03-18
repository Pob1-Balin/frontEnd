import React from 'react'
import UnitSidebar from '../components/Sidebar';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function Tespage(){
    return(
        <>
            {/* <UnitSidebar/> */}
            {/* <main>
                
                <h1>tesy Page</h1>
            </main> */}
            <div className="d-flex" id="wrapper">
                <SidebarLinks/>  
                
            

                <div id="page-content-wrapper">
                    <ToggleButton/>
                    <div className="container-fluid">
                        <h1 className="mt-4">Simple Sidebar</h1>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tespage;