import React, { useState, useEffect } from 'react';
import NotesIcon from '@mui/icons-material/Notes';
import { height } from '@mui/system';
import './togBut.css'
import './styey.css'

function ToggleButton() {
  const [openbtn, setOpenbtn] = useState("");
  const [closebtn, setClosebtn] = useState("");
  var openNav =  function openNav() {
    document.getElementById("mySidebar").style.width = "18rem";
    document.getElementById("BodyContent").style.marginLeft = "18rem";
    setOpenbtn("close");
    setClosebtn("open");   
  }

  const handleClick = (event) => {
    document.getElementById("closebtn").click();
  }
  
  // const handleClick2 = (event) => {
  //   document.getElementById("closebtn2").click();
  // }
  
  useEffect(() => {
    if (window.innerWidth <= 1000) { 
      // handleClick()
    }   
  });
  // window.addEventListener('resize',(event) => {
  //   if (window.innerWidth <= 1000) { 
  //     handleClick()
  //   }   
  //   if (window.innerWidth > 1000) { 
  //     handleClick2()
  //   }   
  // });

  var closeNav = function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("BodyContent").style.marginLeft= "0";
    setClosebtn("close");
    setOpenbtn("open");
  }
    return (
      <>
        <nav className={`style navbar navbar-expand-lg navbar-light mb-2 position-absolute TogBut ${openbtn == "close" ? "style1" : ""}`} style={{margin:"0rem", marginLeft:"1rem"}}>
            <div className="container-fluid">
                 <button id="closebtn2" style={{background:"transparent", color:"gray", fontSize:"1.5rem", border:"none", outline:"none"}} onClick={openNav} className={`openbtn ${openbtn == "close" ? "close" : ""}`}>☰</button>
                 <button id="closebtn" style={{background:"transparent", color:"gray", fontSize:"1.5rem", border:"none", outline:"none"}} onClick={closeNav} className={`closebtn ${closebtn == "close" ? "close" : ""}`}>☰</button>
            </div>
        </nav>
      </>
    )

  }


export default ToggleButton;


