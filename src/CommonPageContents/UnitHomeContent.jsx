import React, { useEffect, useState } from "react";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection2 from '../AdminDashboard/components/AdminHeaderSection2'
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

    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        axios.get(`${API}/unit/unitsdata/${unitId.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
      }, []);


      console.log("wow", unitsData);

      var page_title = "";
      {unitsData.map((item) => {
         item.unit_home_content.map((item2) => {
            page_title = item2.page_title;
         })
      })}

    return(
        <>
            <div className="">
                <div className="Unit-Dashboard-wrapper">
                    {head == "admin" ?
                        <AdminHeaderSection2 prev='#' destination="Accueil" id={unitId.id} page_title={page_title} header_title={page_title} />
                        :
                        <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" />
                    }
                </div>

                <div className="unites_divider_line"></div>
                    {unitsData.map((item) =>
                        item.unit_home_content.map((item2) =>
                             <PlayerExample video_link={item2.video}/>
                        )
                    )}
                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Units content"/>
                 </div>

            </div>
        </>
    )
}

export default UnitHomeContent;