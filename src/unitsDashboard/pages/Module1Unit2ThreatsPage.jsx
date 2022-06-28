import React from 'react'
import UnitSidebar from '../components/Sidebar';
import Module1Unit2ThreatsContent from '../Units-body-contents/Module1Unit2ThreatsContent';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function Module1Unit2ThreatsPage(){
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
                    <Module1Unit2ThreatsContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Module1Unit2ThreatsPage;