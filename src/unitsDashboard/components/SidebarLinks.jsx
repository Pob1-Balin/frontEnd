import React, { useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import './sidebar.css'
import './styey.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config'

function AdminSidebarLinks(props) {
  const location = useLocation();
  const unitId = location.state;
  const [unitsContent, setUnitsContent] = useState([]);
  var unit_id = unitId.id;
  const unitsId = props.unitsId;

  useEffect(() => {
    axios.get(`/unit/unitsdata/${unit_id}`).then(({data})=>{
      setUnitsContent(data.data)
    }).catch((err)=>{
     //    console.log("Something Went Wrong:", err)
    })
    // Aos.init({ duration: 2000 });
  }, []);

    return (
      <>
            <div id="mySidebar" className="side_bar border-end bg-white" style={{width:'18rem'}}>
                <div className="list-group list-group-flush">
                    <header className="sidebar-header bg-light SideHeader position-" style={{minHeight:'35vh'}}>
                         <h2 className="text-left fs-33 text-white text-center letter-spacing-1 mx-auto">hyperconnected digital world</h2>
                    </header>
                    <div className="list-group list-group-flush">
                    <NavLink style={{textDecoration:"none"}} to={"/unitcontent"} state={{id:unit_id}} activeStyle={{ color: 'red' }} className="unit-nave fw-bold list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-4'/>Home</NavLink>
                       {unitsContent.map((item) =>
                           item.unit_content.map((item2, index) =>
                               <NavLink style={{textDecoration:"none"}} to={"/structure"+item2.route} state={{id:unit_id, content:item2, index:index}} activeStyle={{ color: 'red' }} className="unit-nave fw-bold list-group-item-action list-group-item-light p-3"><NotesIcon className='mr-4'/>{item2.sidebar_name}</NavLink>
                           )
                       )}
                    </div>
                </div>
            </div>
      </>
    )

  }
export default AdminSidebarLinks;