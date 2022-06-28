import React from 'react';
import NotesIcon from '@mui/icons-material/Notes';
import { height } from '@mui/system';
import './togBut.css'
import './styey.css'

function ToggleButton() {
    var openNav =  function openNav() {
    document.getElementById("mySidebar").style.width = "15rem";
    document.getElementById("BodyContent").style.marginLeft = "15rem";
  }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light mb-2 position-absolute TogBut" style={style}>
            <div className="container-fluid">
                 <button onClick={openNav} className="openbtn" id=""><NotesIcon/></button>
            </div>
        </nav>
      </>
    )

  }


export default ToggleButton;

const style = {
    top: '15%',
    marginLeft: '-1%',
    height:'20px'
}
