import React, { useEffect, useState } from "react";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection from '../AdminDashboard/components/AdminHeaderSection'
import FooterSection from '../unitsDashboard/components/FooterSection'
import '../ClientsDashboard/App.css'
import PlayerExample from "../unitsDashboard/components/VideoCard";
import { useLocation } from "react-router-dom"
import axios from 'axios'
import { API } from "../config"

function UnitHomeContent(props){
    var head = props.show;
    const location = useLocation();
    const unitId = location.state;

    console.log("wow", unitId);

    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        axios.get(`${API}/unit/unitsdata/${unitId.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);


    return(
        <>
            <div className="">
                <div className="Unit-Dashboard-wrapper">
                    {head == "admin" ?
                        <AdminHeaderSection prev='#' edit="editstructureone" destination="Accueil"/>
                        :
                        <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" />
                    }
                </div>

                <div className="unites_divider_line"></div>
                <PlayerExample video_link={unitsData.title}/>
                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Units content"/>
                 </div>

            </div>
        </>
    )
}

export default UnitHomeContent;