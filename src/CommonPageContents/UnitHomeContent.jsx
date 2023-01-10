import React, { useEffect, useState } from "react";
import '../ClientsDashboard/App.css'
import { useLocation } from "react-router-dom"
import axios from 'axios'
import { API } from "../config"
import { useSelector } from 'react-redux'
import logo from './log.png'
import "../AdminDashboard/components/styey.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
function UnitHomeContent(props){
    const navigate = useNavigate()
    var head = props.show;
    const { user } = useSelector((state) => state.auth)
    const location = useLocation();
    const states = location.state;
    var specificUnit = [];
    var otherUnits = [];

    if(head != "admin"){
      states.currentUserUnits.map((item) => {
        if(item._id === states.id){
            specificUnit = item
        }else{
            otherUnits = [...otherUnits, item]
        }
    })
    }
    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/unit/unitsdata/${states.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        
      }, []);

    var module_id = ""
    unitsData.map((item) => {
        module_id = item.module_id;
    })

    console.log("unitsData", unitsData)

    function smoothScroll(){
        document.querySelector('.home-page-links-container').scrollIntoView({
            behavior: 'smooth'
        });
    }

    const handleClick = (event) => {
        if(states.content.length != 0){
            const structure_details = states.content[0][states.content[0].length - 1];
            navigate("/adminstructure"+structure_details.route, {state: {id:states.id, content:states.content[0], index:0, module_name:location.state.module_name, module_title:location.state.module_title }});
        }
    }

    const moveToUnit = (event) => {
        navigate("/units", {state: {id:module_id, module_name:states.module_name, title:location.state.module_title }});
    }

    return(
        <>
            <div className="" style={{paddingTop:"0rem", marginTop:"-2rem"}}>
                {/* <div className="Unit-Dashboard-wrapper">
                    {head == "admin" ?
                        <AdminHeaderSection2 prev='#' destination="Accueil" id={states.id} page_title={page_title} header_title={page_title} />
                        :
                        <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" page_title={page_title}/>
                    }
                </div> */}
                    {/* {unitsData.map((item) =>
                        item.unit_home_content.map((item2) =>
                             <PlayerExample video_link={item2.video}/>
                        )
                    )} */}

                    {/* <button style={{backgroundColor:"red", width:"10rem"}} onClick={name}>click me</button> */}

                {/* <div className="units-dashboard-footer-wrapper">
                    <FooterSection footer_text="Units content"/>
                 </div> */}
                 <div style={{height:"4rem", background:"white"}}>
                    <div onClick={moveToUnit} className="returntounit" style={{display:"flex", paddingTop:"1.6rem"}}><KeyboardArrowLeftIcon style={{color:"#12448b", fontSize:"1.2rem"}}/><p>Retour à l'unité</p></div>
                 </div>
                 <div className="unit-home-image">
                    <img src={`${API}/images/${states.image}`}/>
                    <div>
                        <p className='header-title text-white' style={{padding:"0rem"}}><b>{states.title}</b></p>
                        <div>
                            <button onClick={handleClick}>COMMENCER LE MODULE</button>
                            <div onClick={smoothScroll} style={{paddingTop:".5rem"}}>DÉTAILS <KeyboardArrowDownIcon style={{fontSize:"1.8rem"}}/></div>
                        </div>
                    </div>
                 </div>
                 {user.isAdmin ?
                    <div><button className="add-buttons units-add-page" data-toggle="modal" data-target="#add" style={{width:"100%", borderRadius:"0rem", border:"none", outline:"none", marginTop:"-.4rem", backgroundImage:"linear-gradient(to bottom right, rgb(35, 175, 203) 5%, rgb(14, 20, 47) 95%)"}}>Ajouter un chapitre</button></div>
                    // <div className="text-end" style={{paddingTop:"1rem", paddingRight:"2rem"}}><button className="add-buttons units-add-page" data-toggle="modal" data-target="#add" style={{width:"auto", borderRadius:"0rem", border:"none", outline:"none", marginTop:"-.4rem", backgroundImage:"linear-gradient(to bottom right, rgb(35, 175, 203) 5%, rgb(14, 20, 47) 95%)", padding:".5rem 1rem", borderRadius:".2rem"}}>Ajouter un chapitre</button></div>
                    :
                    ""
                 }
                 <div className="home-page-links-container">
                    <div className="home-page-links" style={{paddingTop:"3rem", marginBottom:"-3.5rem"}}><h2 className="text-white font-roboto fw-300 fs-18 letter-spacing-2 mx-auto"><img src={logo} width={110} height={120} className='my-5'/></h2></div>
                    {states.content.length != 0 ?
                    <div className="home-page-links">
                        {/* {unitsData.map((item) => {
                            item.unit_content.map((item2, index) => 
                                <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminunitcontent"} activeStyle={{ color: 'red' }} className="unit-nave p-3">
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                        <NotesIcon style={{fontSize:"1.3rem", color:"gray"}} className='mr-1'/>
                                        Introduction 
                                    </div>
                                    <CheckCircleIcon style={{color:"#12448b", fontSize:"1.4rem", marginRight: "-.25rem"}}/>
                                </NavLink>
                            )
                        })} */}


                        {states.content.map((item, index) =><NavLinks content={item} index={index} id={states.id} module_title={location.state.module_title} module_name={location.state.module_name} home="home" />)}
                       
                        {/* <NavLink style={{textDecoration:"none", display:"flex", justifyContent:"space-between"}} to={"/adminunitcontent"}  activeStyle={{ color: 'red' }} className="unit-nave p-3">
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <NotesIcon style={{fontSize:"1.3rem", color:"gray"}} className='mr-1'/>
                                Introduction 
                            </div>
                            <div style={{position:"relative", paddingRight:"1rem"}}>
                                <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={100} thickness={5} style={{'color': '#B4B4B4'}}/></span>
                                <span style={{position:"absolute", top: "0", left:"0"}}><CircularProgress variant="determinate" size="1.1rem" value={20} thickness={5} style={{'color': '#12448b'}}/></span>
                            </div>
                        </NavLink> */}
                    </div>
                    :
                    <div className="home-page-links not-content"><p style={{justifyContent:"center", paddingLeft:"1.1rem"}}>Le contenu de cette unité n'a pas encore été ajouté, veuillez y revenir plus tard!</p></div>
                    }   
                 </div>
            </div>
        </>
    )
}

export default UnitHomeContent;