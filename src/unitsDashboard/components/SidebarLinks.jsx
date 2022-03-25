import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import data from './sidebarList.json'
import './sidebar.css'
import './styey.css'

function SidebarLinks() {

  var closeNav = function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("BodyContent").style.marginLeft= "0";
  }
    return (
      <>

            <div id="mySidebar" className="side_bar border-end bg-white" style={{width:'15rem'}}>
              <div className="list-group list-group-flush">

                <button onClick={closeNav} className="closebtn">close</button>
                
                  <header className="sidebar-header bg-light SideHeader position-" style={{minHeight:'35vh'}}>
                    <h2 className="text-left fs-33 text-white letter-spacing-1 mx-auto">hyperconnected <br /> digital world</h2>
                  </header>
                  <div className="list-group list-group-flush">
                    {data.map((link) => <NavLink to={"/"+link.component} activeStyle={{ color: 'red' }} className="list-group-item fs-15 fw-bold list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-4'/>{link.Title}</NavLink> )}
                  </div>
                </div>
            </div>
      </>
    )

  }
export default SidebarLinks;