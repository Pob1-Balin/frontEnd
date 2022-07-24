import React from 'react'
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import StructureTwoContent from '../../CommonPageContents/StructureTwoContent';

function StructureTwo(){
    return(
        <>
            <div className="">
                <SidebarLinks/>
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <ToggleButton/>
                    <div className="container-fluid">
                        <StructureTwoContent show="client"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StructureTwo;