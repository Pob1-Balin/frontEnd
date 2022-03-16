



import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../components/log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotesIcon from '@mui/icons-material/Notes';
import data from './sidebarList.json'
import SidebarLinks from './SidebarLinks';
<<<<<<< HEAD
=======
import './sidebar.css'
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042

// {HomeIcon, AccountBalanceIcon DocumentScannerIcon, AccountCircleIcon}

function UnitSidebar() {
    return (
      <>
      <SidebarLinks/>
<<<<<<< HEAD
{/* 
=======

>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042

    <header className="topbar bg-light col-md-12 px-3 d-lg-none"  style={{minHeight:'15vh'}}>
        <div className="topbar-left d-flex justify-content-between">
            <span className="topbar-btn sidebar-toggler"><AccountBalanceIcon/></span>
           
        </div>
<<<<<<< HEAD
    </header> */}
=======
    </header>
>>>>>>> fc6b51d9057e886cbcbf8ad6cc6ca53f984dd042
      </>
    )
  }

export default UnitSidebar;
