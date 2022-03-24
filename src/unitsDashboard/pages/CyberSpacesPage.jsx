import React from 'react'
import UnitSidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import CyberSpacesContent from '../Units-body-contents/CyberSpacesContent';

function CyberSpacesPage(){
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
                    <CyberSpacesContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CyberSpacesPage;