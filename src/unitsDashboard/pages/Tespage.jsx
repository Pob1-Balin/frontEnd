import React from 'react'
import UnitSidebar from '../components/Sidebar';
import ToggleButton from '../components/toggleButton';
import SidebarLinks from '../components/SidebarLinks';

function Tespage(){
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
                <div id="BodyContent" style={{marginLeft:'15rem'}}>
                    <ToggleButton/>
                    <div className="container-fluid">
                        <h1 className="mt-4">Simple Sidebar</h1>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tespage;