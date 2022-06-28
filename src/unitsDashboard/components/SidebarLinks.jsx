import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import data from './sidebarList.json'
import './sidebar.css'
import './styey.css'

function SidebarLinks() {
    return (
      <>

            <div id="mySidebar" className="side_bar border-end bg-white" style={{width:'18rem'}}>
              <div className="list-group list-group-flush">
                  <header className="sidebar-header bg-light SideHeader position-" style={{minHeight:'35vh'}}>
                    <h2 className="text-left fs-33 text-white text-center letter-spacing-1 mx-auto">hyperconnected digital world</h2>
                  </header>
                  <div className="list-group list-group-flush">
                    {data.map((link) => <NavLink to={"/"+link.component} activeStyle={{ color: 'red' }} className="fs-15 fw-bold list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-4'/>{link.Title}</NavLink> )}
                  </div>
                </div>
            </div>
      </>
    )

  }
export default SidebarLinks;