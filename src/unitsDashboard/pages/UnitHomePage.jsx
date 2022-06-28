import React from 'react'
import UnitHomeContent from '../Units-body-contents/UnitHomeContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function UnitHomePage(){
    return(
        <>
            <div className="">
                <SidebarLinks/>
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <div>
                         <ToggleButton />
                    </div>
                    <div className="container-fluid px-0">
                         <UnitHomeContent show="client" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnitHomePage;