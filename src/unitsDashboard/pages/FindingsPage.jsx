import React from 'react'
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import FindingsContent from '../Units-body-contents/FindingsContent';

function FindingsPage(){
    return(
        <>
          
            <div className="d-flex px-0" id="wrapper">
                <SidebarLinks/>  
                <div id="page-content-wrapper">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <FindingsContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindingsPage;