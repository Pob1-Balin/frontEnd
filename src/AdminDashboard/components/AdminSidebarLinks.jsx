import React, { useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import './sidebar.css'
import './styey.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config'
import Bg from './dots.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
function AdminSidebarLinks(props) {
  const location = useLocation();
  const unitId = location.state;
  const [unitsContent, setUnitsContent] = useState([]);
  var unit_id = unitId.id;
  const unitsId = props.unitsId;

  // navActiv

  useEffect(() => {
    axios.get(`${API}/unit/unitsdata/${unit_id}`).then(({data})=>{
      setUnitsContent(data.data)
    }).catch((err)=>{
     //    console.log("Something Went Wrong:", err)
    })
    // Aos.init({ duration: 2000 });
  }, []);

  var navElement = document.getElementsByClassName("unit-nave");
  const navClicked = (event) => {
    for (let i = 0; i < navElement.length; i++) {
      navElement[i].classList.remove("navActiv");
    }
    navElement[event].classList.add("navActiv");
  }

  // nav.classList.add("navActiv");
  // element2.classList.remove("border-end");

    return (
      <>
            <div id="mySidebar" className="side_bar border-end" style={{width:'18rem'}}>
                <div className="list-group list-group-flush">
                    <header style={{minHeight:'28vh', padding:"0rem", background:"#030d2e"}}>
                        <img className='image' style={{minHeight:'28vh', padding:"0rem", margin:"0rem"}} src={Bg}/>
                        <h2 className="text-left text-white text-center letter-spacing-1 mx-auto" style={{marginTop:"-9rem"}}>hyperconnected digital world</h2>  
                        <div className='complete-container' style={{color:"white"}}>
                          <LinearProgress variant="determinate" value={20} thickness={5} color="inherit"/>
                          <p className='complete' style={{paddingTop:".2rem"}}>20% TERMINÉ</p>
                        </div>
                    </header>
                    {/* <div><button className="add-buttons units-add-page" data-toggle="modal" data-target="#add" style={{width:"100%", borderRadius:"0rem", border:"none", outline:"none", marginTop:"-.4rem", backgroundImage:"linear-gradient(to bottom right, rgb(35, 175, 203) 5%, rgb(14, 20, 47) 95%)"}}>Ajouter un chapitre</button></div> */}
                    <div className="list-group list-group-flush">
                        {/* <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminunitcontent"} state={{id:unit_id}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                          <div style={{display:"flex", justifyContent:"center"}}>
                            <NotesIcon style={{fontSize:"1.3rem"}} className='mr-1'/>
                            Introduction 
                          </div>
                          <CheckCircleIcon style={{color:"#4ab2cc", fontSize:"1.4rem", marginRight: "-.25rem"}}/>
                        </NavLink> */}
                        {unitsContent.map((item) =>
                            item.unit_content.map((item2, index) =>
                              <span>
                                {index == 0 ?
                                  <NavLink onClick={() => navClicked(index)} style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+item2.route} state={{id:unit_id, content:item2, index:index}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                      <NotesIcon style={{fontSize:"1.3rem"}} className='mr-1'/>
                                      {item2.sidebar_name}
                                    </div>
                                    <div style={{position:"relative", paddingRight:"1rem"}}>
                                      <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={100} thickness={5} style={{'color': 'white'}}/></span>
                                      <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={20} thickness={5} style={{'color': '#4ab2cc'}}/></span>
                                    </div>
                                  </NavLink>
                                  :
                                  <NavLink onClick={() => navClicked(index)} style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+item2.route} state={{id:unit_id, content:item2, index:index}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                      <NotesIcon style={{fontSize:"1.3rem"}} className='mr-1'/>
                                      {item2.sidebar_name}
                                    </div>
                                    <div style={{position:"relative", paddingRight:"1rem"}}>
                                      <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={100} thickness={5} style={{'color': 'white'}}/></span>
                                      <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={20} thickness={5} style={{'color': '#4ab2cc'}}/></span>
                                    </div>
                                  </NavLink>
                                  }
                              </span>

                            )
                        )}
                          {/* <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminunitcontent"} state={{id:unit_id}} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                          <div style={{display:"flex", justifyContent:"center"}}>
                            <NotesIcon style={{fontSize:"1.3rem"}} className='mr-1'/>
                            Introduction 
                          </div>
                          <CheckCircleIcon style={{color:"#4ab2cc", fontSize:"1.4rem", marginRight: "-.25rem"}}/>
                        </NavLink> */}
                        <NavLink to="#" style={{display:"hidden"}}></NavLink>
                    </div>
                </div>
            </div>
      </>
    )

  }
export default AdminSidebarLinks;






