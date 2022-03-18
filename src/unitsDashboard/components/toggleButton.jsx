import React from 'react';
import NotesIcon from '@mui/icons-material/Notes';
import { height } from '@mui/system';
import './togBut.css'

function ToggleButton() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light mb-2 position-absolute TogBut" style={style}>
            <div className="container-fluid">
                
                 <button className="btn" id="sidebarToggle"><NotesIcon/></button>
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
