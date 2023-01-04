import React, { useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import './sidebar.css'
import './styey.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config'
import Bg from './dots.jpg'
import CircularProgress from '@mui/material/CircularProgress';
function AdminSidebarLinks(props) {
  const location = useLocation();
  const unitId = location.state;
  const [unitsContent, setUnitsContent] = useState([]);
  var unit_id = unitId.id;
  const unitsId = props.unitsId;

  useEffect(() => {
    axios.get(`${API}/unit/unitsdata/${unit_id}`).then(({data})=>{
      setUnitsContent(data.data)
    }).catch((err)=>{
     //    console.log("Something Went Wrong:", err)
    })
    // Aos.init({ duration: 2000 });
  }, []);

    return (
      <>
            <div id="mySidebar" className="side_bar border-end" style={{width:'18rem'}}>
                <div className="list-group list-group-flush">
                    <header className="bg-dark" style={{minHeight:'28vh', padding:"0rem"}}>
                        <img className='image' style={{minHeight:'28vh', padding:"0rem", margin:"0rem"}} src={Bg}/>
                         {/* <h2 className="text-left fs-33 text-white text-center letter-spacing-1 mx-auto">hyperconnected digital world</h2> */}
                    </header>
                    <div><button className="add-buttons units-add-page" data-toggle="modal" data-target="#add" style={{width:"100%", backgroundColor:"#cac9ca98", borderRadius:"0rem"}}>Ajouter un chapitre</button></div>
                    <div className="list-group list-group-flush">
                        <NavLink style={{textDecoration:"none"}} to={"/adminunitcontent"} state={{id:unit_id}} activeStyle={{ color: 'red' }} className="unit-nave list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-1' style={{fontSize:"1.3rem"}}/>Introduction</NavLink>
                        {unitsContent.map((item) =>
                            item.unit_content.map((item2, index) =>
                              <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminstructure"+item2.route} state={{id:unit_id, content:item2, index:index}} activeStyle={{ color: 'red' }} className="unit-nave list-group-item-action list-group-item-light p-3">
                                  <div style={{display:"flex", justifyContent:"center"}}>
                                    <NotesIcon style={{fontSize:"1.3rem"}} className='mr-1'/>
                                    {item2.sidebar_name}
                                  </div>
                                  <div style={{position:"relative", paddingRight:"1rem"}}>
                                    <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={100} thickness={5} style={{'color': 'white'}}/></span>
                                    <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={70} thickness={5} style={{'color': 'yellow'}}/></span>
                                  </div>
                              </NavLink>
                            )
                        )}
                    </div>
                </div>
            </div>
      </>
    )

  }
export default AdminSidebarLinks;






