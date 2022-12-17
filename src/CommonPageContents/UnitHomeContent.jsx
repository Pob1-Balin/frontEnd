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
    const user = JSON.parse(window.localStorage.getItem("user"));
    const userId =  user._id;
    var head = props.show;
    const location = useLocation();
    const unitId = location.state;
    const serviceid = unitId.serviceId;
    const moduleid = unitId.moduleId;

    const [unitsData, setUnitsData] = useState([]);
    const [userServs, setUserServs] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/unit/unitsdata/${unitId.id}`).then(({data})=>{
            setUnitsData(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        
        axios.get(`${API}/serv/getserv/${userId}`).then(({ data }) => {
            setUserServs(data.data)
         }).catch((err) => {
             //  console.log("Something Went Wrong:", err)
         });
        // Aos.init({ duration: 2000 });
      }, []);

//--------------------------------------------- calculate time spent on this page ----------------------------------------

//--- geting unit's service ----
// var userServices = [{}];
// {userServs.map((item) => {
//     userServices = item.services;
// })}

//--- geting unit's module ----
// var service_modules = [];
// userServices.map((item) => {
//     if(item.service_id === serviceid){
//         service_modules = [...service_modules, item.modules]
//     }
// })

//--- geting all units fron unit's module ----
// var modules_units = [];
// service_modules.map((item) => {
//     item.map((item2) => {
//          if(item2.module_id === moduleid){
//              modules_units = [...modules_units, item2.units]
//          }
//     })
// })

//--- geting specific unit ----
// var units = {};
// modules_units.map((item) => {
//     item.map((item2) => {
//          if(item2.unit_id === unitId.id){
//              item2.unit_time_spent = "36";
            //  units = item2
//          }
//     })
// })

// var services = [{}];
// {userServs.map((item) => {
//     services = item.services;
// })}

// console.log(services)

// const name = () => {
// axios.put(`http://localhost:7000/api/v1/serv/update/${userId}`, { services })
//     .then(res => {
//     })
//     .catch(err => {
//     })
// }

//------------------------------ calculating time spent begins here -------------------
// let timeSpentScrolling = 0;

// let isHalted = false;
// let haltedStartTime, haltedEndTime;
// let totalHaltedTime = 0;

// const update_halt_state = () => {
//     if (isHalted) {
//         isHalted = false;
//         haltedEndTime = new Date().getTime()
//         totalHaltedTime += (haltedEndTime - haltedStartTime)
//     } else {
//         isHalted = true;
//         haltedStartTime = new Date().getTime()
//     }
// }

// Listen for scroll events
// window.addEventListener('scroll', () => {
//     timeSpentScrolling += 1.8;
//     update_halt_state()
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const start = new Date().getTime();

    // AVERAGE SCROLLING INTERVAL - 3 munites
    // setInterval(() => {
    //     if (new Date().getTime() - start > 180000) {
    //         update_halt_state()
    //     }
    // }, 180000)

    // const pendingOps = new Set();

    // window.addEventListener("beforeunload", (event) => {
    //     const end = new Date().getTime();
    //     update_halt_state()

    //     const totalTime = (end - start) - (timeSpentScrolling) - totalHaltedTime;

    //     const total_unit_time_spent = totalTime;

        // name();

//--------------------------- upading units time spent ---------------------------

            // if(pendingOps.size){
            //     event.returnValue = "There is pending work";
            // }

            // function addToPendingWork(promise){
            //     pendingOps.add(promise);
            //     const cleanup = () => pendingOps.delete(promise);
            //     promise.then(cleanup).catch(cleanup)
            // }

//-----------------------------/upading units time spent ---------------------------


//     });

// });

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
                        <AdminHeaderSection2 prev='#' destination="Accueil" id={unitId.id} page_title={page_title} header_title={page_title} />
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