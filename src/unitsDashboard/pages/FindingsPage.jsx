import React from 'react'
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import FindingsContent from '../Units-body-contents/FindingsContent';
import '../components/styey.css'

function FindingsPage(){
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
                    <div className="">
                    <FindingsContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindingsPage;