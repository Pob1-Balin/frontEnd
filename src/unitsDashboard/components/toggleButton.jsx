import React from 'react';
import NotesIcon from '@mui/icons-material/Notes';
import { height } from '@mui/system';

function ToggleButton() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light mb-2 position-absolute" style={style}>
            <div className="container-fluid">
                
                 <button className="btn" id="sidebarToggle"><NotesIcon/></button>
            </div>
        </nav>
      </>
    )

  }


export default ToggleButton;

const style = {
    marginTop: '5%',
    marginLeft: '-1%',
    height:'20px'
}
