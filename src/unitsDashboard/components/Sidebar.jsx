


import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../../components/log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotesIcon from '@mui/icons-material/Notes';
import data from './sidebarList.json'
import SidebarLinks from './SidebarLinks';
import ToggleButton from './toggleButton';

// {HomeIcon, AccountBalanceIcon DocumentScannerIcon, AccountCircleIcon}

function UnitSidebar() {
    return (
      <>
        <SidebarLinks/>  
      </>
    )
  }

export default UnitSidebar;
