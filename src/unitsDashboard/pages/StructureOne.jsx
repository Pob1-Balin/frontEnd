import React from 'react'
import StructureOneContent from '../../CommonPageContents/StructureOneContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function StructureOne(){
    return(
        <>
            <div className="">
                <SidebarLinks/>
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <div>
                         <ToggleButton />
                    </div>
                    <div className="container-fluid px-0">
                         <StructureOneContent show="client" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StructureOne;