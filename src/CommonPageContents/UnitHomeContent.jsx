import React, { useEffect, useState } from "react";
import HeaderSection from '../unitsDashboard/components/HeaderSection'
import AdminHeaderSection2 from '../AdminDashboard/components/AdminHeaderSection2'
import FooterSection from '../unitsDashboard/components/FooterSection'
import '../ClientsDashboard/App.css'
import PlayerExample from "../unitsDashboard/components/VideoCard";
import { useLocation } from "react-router-dom"
import axios from 'axios'
import { API } from "../config"
import { useSelector } from 'react-redux'

function UnitHomeContent(props){
    var head = props.show;
    const { user } = useSelector((state) => state.auth)
    const location = useLocation();
    const states = location.state;
    var specificUnit = [];
    var otherUnits = [];
    states.currentUserUnits.map((item) => {
        if(item._id === states.id){
            specificUnit = item
        }else{
            otherUnits = [...otherUnits, item]
        }
    })



    const [unitsData, setUnitsData] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/unit/unitsdata/${states.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        
      }, []);

      console.log("unitId", specificUnit)
      console.log("unitId2", otherUnits)

//--------------------------------------------- calculate time spent on this page ----------------------------------------

const submitUserInfo = (userupdate) => {
    axios.put(`${API}/users/${user._id}/update`, userupdate).then(res => {

      })
      .catch(err => {
      })
}


//------------------------------ calculating time spent begins here -------------------

let timeSpentScrolling = 0;

let isHalted = false;
let haltedStartTime, haltedEndTime;
let totalHaltedTime = 0;

const update_halt_state = () => {
  if (isHalted) {
    isHalted = false;
    haltedEndTime = new Date().getTime()
    totalHaltedTime += (haltedEndTime - haltedStartTime)
  } else {
    isHalted = true;
    haltedStartTime = new Date().getTime()
  }
}

// Listen for scroll events
window.addEventListener('scroll', () => {
  timeSpentScrolling += 1.8;

  update_halt_state()
});


document.addEventListener("DOMContentLoaded", () => {
 const start = new Date().getTime()


  // AVERAGE SCROLLING INTERVAL - 39 seconds
  setInterval(() => {
    if (new Date().getTime() - start > 39000) {
      update_halt_state();
    }
  }, 39000)

  window.addEventListener("beforeunload", () => {
    const end = new Date().getTime();

    update_halt_state()

    const totalTime = ((end - start)) - (timeSpentScrolling) - totalHaltedTime
    specificUnit.unit_time_spent = totalTime
    submitUserInfo({
        units: [...otherUnits, specificUnit]
    });
  });

});

//------------------------------------------------------------------------------------------------------------------------------------------



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
                        <AdminHeaderSection2 prev='#' destination="Accueil" id={states.id} page_title={page_title} header_title={page_title} />
                        :
                        <HeaderSection prev='#' destination="Accueil" header_title="Bienvenue" page_title={page_title}/>
                    }
                </div>

                <div className="unites_divider_line"></div>
                    {unitsData.map((item) =>
                        item.unit_home_content.map((item2) =>
                             <PlayerExample video_link={item2.video}/>
                        )
                    )}

                    {/* <button style={{backgroundColor:"red", width:"10rem"}} onClick={name}>click me</button> */}

                <div className="units-dashboard-footer-wrapper">
                     <FooterSection footer_text="Units content"/>
                 </div>

            </div>
        </>
    )
}

export default UnitHomeContent;