import React from 'react'
import UnitHomeContent from '../../CommonPageContents/UnitHomeContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';
import {useLocation} from 'react-router-dom'

function UnitHomePage(){
    const location =useLocation();
    const unit_id = location.id
    return(
        <>
            <div className="" >
                <div id="BodyContent">
                    <div>
                         <ToggleButton />
                    </div>
                    <div className="container-fluid px-0" style={{marginTop:"-8.5rem"}}>
                         <UnitHomeContent show="client" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnitHomePage;