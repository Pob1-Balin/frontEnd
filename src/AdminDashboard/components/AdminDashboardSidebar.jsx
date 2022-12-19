import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './log.png'
import HomeIcon from '@mui/icons-material/Home';
import { People } from '@mui/icons-material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
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
      localStorage.removeItem("refreshservice")
      localStorage.removeItem("redirectserv")
      localStorage.removeItem("refreshmodules")
      localStorage.removeItem("refreshunit")
      localStorage.removeItem("refreshanswer")
      localStorage.removeItem("redirectmod")
      navigate('/')
    }
    return (
         <>
             <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sider-1 pt-0" style={{maxWidth: '14rem', boxShadow:"none"}}>
                <header className="sidebar-header" style={{minHeight:'20vh', background:"white"}}>
                     <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2>
                </header>
                <nav className="sidebar-navigation" style={{background: 'white', marginLeft: "-1rem", color:'gray'}}>
                    <ul className="menu menu-bordery pt- text-left pl-4" style={{color:'gray'}}>
                        <li className="nav-item pt-5 list" style={{marginTop: '-2rem', color:'white'}}>
                             <Link to='/admindashboard' className='ml-4 test1' style={{textDecoration:'none'}}><HomeIcon className='nav-icons'/>Tableau de bord</Link>
                        </li>
                        <li className="nav-item pt-4 list">
                             <Link to="/services" className=' ml-4 test1'><LibraryBooksIcon className='nav-icons'/>Cours</Link>
                        </li>
                        <li className="nav-item pt-4 list">
                             <Link to="/clients" className='ml-4 test1' style={{textDecoration:'none'}}><People className='nav-icons'/>Utilisateurs</Link>
                        </li>
                    </ul>
                </nav>
             </aside>

             <header className="topbar col-md-12 px-3"  style={{minHeight:'11vh', marginLeft: '-.1rem', marginBottom:"0rem"}}>
                 <div className="topbar-left">
                     <span style={{color:'gray'}} className="topbar-btn sidebar-toggler"><i>&#9776;</i></span>
                 </div>
                 <h2 className='text-black mx-auto d-lg-none pt-2'><img src={logo} width={70} height={70}/></h2>
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
                                 <span class="admin-name" style={{color:'white'}}>{user.first_name + " " + user.last_name}</span>
                                 <i style={{color:'white'}} class="fa fa-angle-down edu-icon edu-down-arrow admin-profile-arrow"></i>
                            </a>
                            <ul role="menu" class="dropdown-header-top author-log border-bottom dropdown-menu animated zoomIn adminUser">
                                 <li><Link to="/adminprofile" href="#"><span class="edu-icon edu-user-rounded author-log-ic border-bottom"></span>Votre profil</Link></li>
                                 <li className='loggout'><span class="edu-icon edu-user-rounded author-log-ic"><div onClick={onLogout}>Se déconnecter</div></span></li>
                            </ul>
                            <select className='change_language' style={{ height: '1rem', border:"none", outline:"none", color:"white", background:"transparent",}}>
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
                             <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn adminUser">
                                 <li><Link to="/adminprofile"><span class="edu-icon edu-user-rounded author-log-ic border-bottom"></span>Votre profil</Link></li>
                                 <li className='loggout'><span class="edu-icon edu-user-rounded author-log-ic"><div onClick={onLogout}>Se déconnecter</div></span></li>
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

export default AdminDashboardSidebar;


