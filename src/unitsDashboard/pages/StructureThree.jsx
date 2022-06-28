import React from 'react'
import StructureThreeContent from '../Units-body-contents/StructureThreeContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function StructureThree(){
    return(
        <>
            <div className="">
                <SidebarLinks/>
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <div>
                         <ToggleButton />
                    </div>
                    <div className="container-fluid px-0">
                         <StructureThreeContent show="client" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StructureThree;