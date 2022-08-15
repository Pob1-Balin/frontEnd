import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import './Admindashboardsidebar.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auth/authSlice'

function AdminDashboardSidebar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }
    return (
         <>
             <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sider-1 pt-0" style={{maxWidth: '14rem'}}>
                <header className="sidebar-header" style={{minHeight:'20vh', background:"white", boder:'none'}}>
                     <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2>
                </header>
                <nav className="sidebar-navigation" style={{background: 'white', marginLeft: "-1rem", color:'gray'}}>
                    <ul className="menu menu-bordery pt- text-left pl-4" style={{color:'gray'}}>
                        <li className="nav-item pt-5 list" style={{marginTop: '-2rem', color:'white'}}>
                             <Link to='/admindashboard' className='ml-4 test1' style={{textDecoration:'none'}}><HomeIcon className='nav-icons'/>Dashboard</Link>
                        </li>
                        <li className="nav-item pt-4 list">
                             <Link to='/services' className=' ml-4 test1'><AccountBalanceIcon className='nav-icons'/>Services</Link>
                        </li>
                        <li className="nav-item pt-4 list">
                             <Link to='/clients' className='ml-4 test1' style={{textDecoration:'none'}}><DocumentScannerIcon className='nav-icons'/>Clients</Link>
                        </li>
                    </ul>
                </nav>
             </aside>

             <header className="topbar col-md-12 px-3"  style={{minHeight:'11vh', marginLeft: '-.1rem'}}>
                 <div className="topbar-left">
                     <span style={{color:'gray'}} className="topbar-btn sidebar-toggler"><i>&#9776;</i></span>
                 </div>
                 <h2 className='text-black mx-auto d-lg-none pt-2 '><img src={logo} width={70} height={70}/></h2>
                 <div className="header-right-info mr-4 headerTop">
                     <ul className="nav navbar-nav mai-top-nav header-right-menu">
                        <li className="nav-item">
                             <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link"></a>
                             <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn"></ul>
                        </li>
                     </ul>
                 </div>
                 <div class="header-right-info mr-4 headerTop">
                    <ul class="nav navbar-nav mai-top-nav header-right-menu">
                        <li class="nav-item">
                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link">
                                 <img src="./images/logo.jpg" alt="" />
                                 <span class="admin-name" style={{color:'white'}}>{user.first_name}</span>
                                 <i style={{color:'white'}} class="fa fa-angle-down edu-icon edu-down-arrow admin-profile-arrow"></i>
                            </a>
                            <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                 <li><Link to="/adminprofile"><span class="edu-icon edu-user-rounded author-log-ic"></span>My Profile</Link></li>
                                 <li><button onClick={onLogout}><span class="edu-icon edu-locked author-log-ic"></span>Log Out</button></li>
                            </ul>
                        </li>
                    </ul>
                 </div>
                 <div className="header-right-info logoutcontainer">
                     <ul className="nav navbar-nav mai-top-nav header-right-menu text-white mx-auto d-lg-none pt-2  px-3">
                         <li className="nav-item">
                             <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link">
                                 <ExitToAppIcon className='logoutIcon' />
                             </a>
                             <ul role="menu menu2" className="dropdown-header-top author-log dropdown-menu animated zoomIn" style={{marginLeft:'40%'}}>
                                 <li><Link to="/adminprofile"><span className="edu-icon edu-user-rounded author-log-ic"></span>My Profile</Link></li>
                                 <li><button onClick={onLogout}><span class="edu-icon edu-locked author-log-ic"></span>Log Out</button></li>
                            </ul>
                         </li>
                     </ul>
                 </div>
             </header>

         </>
    )
  }

export default AdminDashboardSidebar;


