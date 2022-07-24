import React from 'react'
import UnitHomeContent from '../../CommonPageContents/UnitHomeContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';
import {useLocation} from 'react-router-dom'

function UnitHomePage(){
    const location =useLocation();
    const unit_id = location.id
    console.log(unit_id);
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