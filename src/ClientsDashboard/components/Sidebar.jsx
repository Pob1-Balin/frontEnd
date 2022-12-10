import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from './log.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './sidebar.css';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../redux/auth/authSlice'

function Sidebar(props) {
  const service = JSON.parse(localStorage.getItem("servId"))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    localStorage.removeItem("servId")
    navigate('/')
  }

  return (
    <>
       <aside className="sidebar sidebar-icons-left sidebar-icons-boxed sidebar-expand-lg sidebar-color-info sider-1 pt-0">
         <header className="sidebar-header" style={{minHeight:'20vh'}}>
           <h2 className="text-center text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2>
         </header>
         <nav className="sidebar-navigation">
            <ul className="menu menu-bordery pt- mt-5 text-left pl-4">
                <li className="nav-item pt-5 list">
                    <Link to='/clientservicedashboard' className='ml-4 test' style={{textDecoration:'none'}} state={{ service_id: service._id, modules: service.modules}}><HomeIcon style={{marginRight:"1rem", fontSize:"1.4rem"}}/>Accueil</Link>
                </li>
                <li className="nav-item pt-4 list">
                    <Link to='/res' className=' ml-4 test'><AccountBalanceIcon className='' style={{marginRight:"1rem", fontSize:"1.4rem"}}/>Mes ressources</Link>
                </li>
                <li className="nav-item pt-4 list">
                    <Link to='/attest' className='ml-4 test'><DocumentScannerIcon style={{marginRight:"1rem", fontSize:"1.4rem"}}/>Mon attestation</Link>
                </li>
                <li className="nav-item pt-4 list active">
                    <Link to='/profile' className=' ml-4 test' style={{textDecoration:'none'}}> <AccountCircleIcon style={{marginRight:"1rem", fontSize:"1.4rem"}}/>Mon profil</Link>
                </li>
            </ul>
         </nav>
         <header className="sidebar-header">
           <button style={{backgroundColor:"transparent", border:"none", outline:"none"}} className="services-subscribed text-center fw-300 fs-18 mx-auto"><Link to="/home">Voir tous les cours</Link></button>
         </header>
       </aside>

       <header className="topbar bg-light col-md-12 px-3"  style={{minHeight:'11vh', marginLeft: '-.1rem'}}>
        <div className="topbar-left">
           <span style={{color:'gray'}} className="topbar-btn sidebar-toggler"><i>&#9776;</i></span>
        </div>
        <h2 className='text-black mx-auto d-lg-none pt-2 '><img src={logo} width={70} height={70}/></h2>
          <div class="header-right-info mr-4">
            <ul class="nav navbar-nav mai-top-nav header-right-menu1 mt-20">
                <li class="nav-item">
                    <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link">
                       <ExitToAppIcon className='logoutIcon' />
                    </a>
                    <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn" style={{maxHeight:"2.8rem", maxWidth:"1rem"}} >
                       <li><a href="#"><span class="edu-icon edu-locked author-log-ic"></span><div className='logoutbtn' onClick={onLogout}>Se déconnecter</div></a></li>
                    </ul>
                </li>
            </ul>
          </div>
       </header>
    </>
  )
}

export default Sidebar;
