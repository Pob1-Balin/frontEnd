import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from './log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Admindashboardsidebar.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auth/authSlice'

function AdminUserSidebar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const serv_id = JSON.parse(localStorage.getItem("servId"));

    const moveto = () => {
        localStorage.setItem('redirectserv', true);
        navigate("/adminmodulepage", {state:{service_id: serv_id }});
    }

    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      localStorage.removeItem("refreshservice")
      localStorage.removeItem("redirectserv")
      localStorage.removeItem("refreshmodules")
      navigate('/')
    }
    return (
        <>
            <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sidebar-color-info sider-1 pt-0" style={{}}>
                <header className="sidebar-header" style={{minHeight:'20vh'}}>
                     <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2>
                </header>
                <nav className="sidebar-navigation">
                    <ul className="menu menu-bordery pt- mt-3 text-left pl-4">
                        <li className="nav-item pt-5 list">
                                <a onClick={() => moveto()} href='#' className='ml-4 test' style={{textDecoration:'none'}}><HomeIcon style={{marginRight:"1rem", fontSize:"1.4rem"}}/>Tableau de bord</a>
                        </li>
                        <li className="nav-item pt-4 list">
                                <Link to='/adminresource' className=' ml-4 test' style={{textDecoration:'none'}}><AccountBalanceIcon style={{marginRight:"1rem", fontSize:"1.4rem"}} />Mes ressources</Link>
                        </li>
                    </ul>
                </nav>
                <header className="sidebar-header">
                    <button style={{backgroundColor:"transparent", border:"none", outline:"none"}} className="services-subscribed text-center fw-300 fs-18 mx-auto"><Link to="/services">Voir tous les cours</Link></button>
                </header>
            </aside>
        
            <header className="topbar bg-light col-md-12 px-3"  style={{minHeight:'11vh', marginLeft: '-.1rem'}}>
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
                    <li className="nav-item d-flex">
                        <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link">
                                <img src="./images/logo.jpg" alt="" />
                                <span class="admin-name" style={{color:'gray'}}>{user.first_name + " " + user.last_name}</span>
                                <i style={{color:'gray'}} class="fa fa-angle-down edu-icon edu-down-arrow admin-profile-arrow"></i>
                        </a>
                        <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn usersidehover">
                                <li><Link to="/adminprofile"><span class="edu-icon edu-user-rounded author-log-ic" style={{textDecoration:"none"}}></span>Votre profil</Link></li>
                                <li className='loggout'><span class="edu-icon edu-user-rounded author-log-ic"><div onClick={onLogout}>Se déconnecter</div></span></li>
                        </ul>
                        <select className='change_language' style={{ height: '1rem', border:"none", outline:"none", color:"gray", background:"transparent",}}>
                            <option value="FRE">FRE</option>
                            <option value="ENG">ENG</option>
                        </select>
                    </li>
                </ul>
                </div>
                <div className="header-right-info logoutcontainer">
                    <ul className="nav navbar-nav mai-top-nav header-right-menu text-white mx-auto d-lg-none pt-2  px-3">
                        <li className="nav-item d-flex">
                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link">
                                <ExitToAppIcon className='logoutIcon' />
                            </a>
                            <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn usersidehover">
                                <li><Link to="/adminprofile"><span class="edu-icon edu-user-rounded author-log-ic border-bottom"></span>Votre profil</Link></li>
                                <li className='loggout'><span class="edu-icon edu-user-rounded author-log-ic border-bottom"><div onClick={onLogout}>Se déconnecter</div></span></li>
                        </ul>
                        <select className='change_language' style={{ height: '1rem', border:"none", outline:"none", color:"gray", marginLeft:".2rem", marginTop:".6rem", fontSize:"1rem", background:"transparent",}}>
                            <option value="FRE">FRE</option>
                            <option value="ENG">ENG</option>
                        </select>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
  }

export default AdminUserSidebar;
