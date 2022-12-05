import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from './log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Admindashboardsidebar.css'

function AdminUserSidebar() {
    return (
        <>
            <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sidebar-color-info sider-1 pt-0" style={{}}>
                <header className="sidebar-header" style={{minHeight:'20vh'}}>
                     <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2>
                </header>
                <nav className="sidebar-navigation">
                    <ul className="menu menu-bordery pt- mt-1 text-left pl-4">
                            <li className="nav-item pt-5 list" style={{fontSize: '1.2rem'}}>
                                 <Link to='/adminmodulepage' className='ml-4 test' style={{textDecoration:'none'}}><HomeIcon className=''/>Home</Link>
                            </li>
                            <li className="nav-item pt-4 list" style={{fontSize: '1.2rem'}}>
                                 <Link to='/adminresource' className=' ml-4 test' style={{textDecoration:'none'}}><AccountBalanceIcon className=''/>My resources</Link>
                            </li>
                    </ul>
                </nav>
                <header className="sidebar-header">
                    <button data-toggle="modal" data-target="#select" style={{backgroundColor:"transparent", border:"none"}} className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto">Services</button>
                </header>
            </aside>
            <header className="topbar bg-light col-md-12 px-3"  style={{minHeight:'10vh'}}>
                <div className="topbar-left">
                     <span className="topbar-btn sidebar-toggler"><i>&#9776;</i></span>
                </div>
                <h2 className='text-black mx-auto d-lg-none pt-2 '><img src={logo} width={70} height={70}/></h2>
                <div className="topbar-right">
                    <ul className="topbar-btns">
                        <li className="dropdown">
                            <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                 <a className="dropdown-item" href="#"><i className="ti-power-off"></i> <ExitToAppIcon/></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
  }

export default AdminUserSidebar;
