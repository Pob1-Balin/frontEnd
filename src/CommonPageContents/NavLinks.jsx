import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
function NavLinks({ content, index, id, home, module_title, module_name }) {
    const structure_details = content[content.length - 1];
  return (
    <>
        {home == "home"?
            <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+structure_details.route} state={{id:id, content:content, index:index, module_name, module_title}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                <div style={{display:"flex", justifyContent:"center"}}>
                    <NotesIcon style={{fontSize:"1.3rem", color:"gray"}} className='mr-1'/>
                    {structure_details.sidebar_name}
                </div>
                <CheckCircleIcon style={{color:"#12448b", fontSize:"1.4rem", marginRight: "-.25rem"}}/>
            </NavLink>
            :
            <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+structure_details.route} state={{id:id, content:content, index:index, module_name, module_title}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                <div style={{display:"flex", justifyContent:"center"}}>
                    <NotesIcon style={{fontSize:"1.3rem", color:"gray"}} className='mr-1'/>
                    {structure_details.sidebar_name}
                </div>
                <CheckCircleIcon style={{color:"#4ab2cc", fontSize:"1.4rem", marginRight: "-.25rem"}}/>
            </NavLink>
        }

    </>
  )
}

export default NavLinks
