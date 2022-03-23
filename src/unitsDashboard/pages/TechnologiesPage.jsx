import React from 'react'
import UnitSidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import TechnologiesContent from '../Units-body-contents/TechnologiesContent';

function TechnologiesPage(){
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
                    <ToggleButton/>
                    <div className="container-fluid">
                        <TechnologiesContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologiesPage;