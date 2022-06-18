import React from 'react'
import UnitSidebar from '../components/Sidebar';
import SidebarLinks from '../components/SidebarLinks';
import ToggleButton from '../components/toggleButton';
import IntroductionContent from '../Units-body-contents/IntroductionContent';
import HeaderSection from '../components/FooterSection';

function IntroductionPage(){
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
                <div id="BodyContent" style={{marginLeft:'18rem'}}>
                    <div>
                        <ToggleButton/>
                    </div>
                    <div className="container-fluid px-0">
                    <IntroductionContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroductionPage;