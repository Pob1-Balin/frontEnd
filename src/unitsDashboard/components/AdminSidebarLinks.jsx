import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import data from './adminsidebarList.json'
import './sidebar.css'
import './styey.css'

function AdminSidebarLinks() {
    return (
      <>
            <div id="mySidebar" className="side_bar border-end bg-white" style={{width:'18rem'}}>
                <div className="list-group list-group-flush">
                    <header className="sidebar-header bg-light SideHeader position-" style={{minHeight:'35vh'}}>
                         <h2 className="text-left fs-33 text-white text-center letter-spacing-1 mx-auto">hyperconnected digital world</h2>
                    </header>
                    <div><button className="add-buttons" data-toggle="modal" data-target="#add" style={{width:"100%", backgroundColor:"#cac9ca98", borderRadius:"0rem"}}>Add Page</button></div>
                    <div className="list-group list-group-flush">
                         {data.map((link) => <NavLink style={{textDecoration:"none"}} to={"/"+link.component} activeStyle={{ color: 'red' }} className=" fs-15 fw-bold list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-4'/>{link.Title}</NavLink> )}
                    </div>
                </div>
            </div>
      </>
    )

  }
export default AdminSidebarLinks;