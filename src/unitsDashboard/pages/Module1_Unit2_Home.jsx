import React from 'react'
import UnitSidebar from '../components/Sidebar';
import UnitHomeContent from '../Units-body-contents/StructureOneContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function Module1_Unit2_Home(){
    function openNav() {
            document.getElementById("mySidebar").style.width = "15rem";
            document.getElementById("BodyContent").style.marginLeft = "15rem";
          }

          function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("BodyContent").style.marginLeft= "0";
          }
    return(

        <>
            <div className="">
                <SidebarLinks/>
                <div id="BodyContent">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <UnitHomeContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Module1_Unit2_Home;