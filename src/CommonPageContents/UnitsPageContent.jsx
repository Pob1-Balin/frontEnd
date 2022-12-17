import React, { useState, useEffect} from "react";
import UnitsCard from '../AdminDashboard/components/UnitsCard';
import UnitsCard2 from '../ClientsDashboard/components/UnitsCard';
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";
import Loader from "./Loader";

function UnitsPageContent(props){
    if(JSON.parse(localStorage.getItem("refreshunit")) == "true"){
        localStorage.removeItem("refreshunit")
        localStorage.setItem('refreshunit', JSON.stringify("false"));
        window.location.reload();
    }

    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem('redirectmod', false);
    });

    const [loading, setLoading] = useState(true)
    const head = props.display;
    const location = useLocation();
    const moduleInfo = location.state
    const module_id = moduleInfo.id
    const module_title = moduleInfo.title.toUpperCase()
    const module_name = moduleInfo.module_name.toUpperCase()
    const serv_id = JSON.parse(localStorage.getItem("servId"));

    const { user } = useSelector((state) => state.auth)

    const [units, setUnits] = useState([]);
    const [userServs, setUserServs] = useState([]);
    useEffect(() => {
       window.scrollTo(0, 0);
       axios.get(`${API}/unit/unit/${module_id}`).then(({data})=>{
           setUnits(data.data)
           setLoading(false)
       }).catch((err)=>{
           setLoading(false)
       })

    
    }, []);

   if(!loading){
      if(head != "admin"){
        
        var moduleUnits = moduleInfo.moduleUnits
        var moduleUnits2 = moduleInfo.moduleUnits

        units.map((item) => {
            if(moduleUnits.find(e => e.unit_id === item._id)){
            }else{
                delete item.createdAt
                delete item.updatedAt
                delete item.__v
                item.unit_id = item._id
                item.unit_time_spent = "0"
                item.unit_score = "0"
                item.questions_answered = "0"
                moduleUnits = [...moduleUnits, item]
            }
        })

        // ---------------------------------------------------------
        var moduleScore = 0;
        var moduleTimeSpent = 0;
        moduleUnits.map((item) => {
            moduleScore += parseInt(item.unit_score, 10)
            moduleTimeSpent += parseInt(item.unit_time_spent)
        })
        moduleScore = moduleScore/moduleUnits.length;
        moduleTimeSpent = Math.floor((moduleTimeSpent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " heures";    
        var userServices = user.services;
        var currentService = []
        var otherService = []
        userServices.map((item) => {
            if(item.service_id === moduleInfo.serviceID){
            currentService = [...currentService, item]
            }else{
                otherService = [...otherService, item]
            }
        })

        
        var currentServiceModules = [];
        currentService.map((item) => {
        currentServiceModules = item.modules
        })

        // ============================================
        var modulesUnitsUpdate = {};
        var newcurrentServiceModules = [];
        modulesUnitsUpdate.units = moduleUnits
        currentServiceModules.map((item) => {
            if(item.module_id === module_id){
                modulesUnitsUpdate.image = item.image
                modulesUnitsUpdate.module_id = item.module_id
                modulesUnitsUpdate.score =  moduleScore
                modulesUnitsUpdate.time_spent = moduleTimeSpent
                modulesUnitsUpdate.title = item.title
                modulesUnitsUpdate._id = item._id
            }else{
                newcurrentServiceModules = [...newcurrentServiceModules, item]
            }
        })

        var finalServiceModules = [...newcurrentServiceModules, modulesUnitsUpdate]

        var newCurrentService = {}
        currentService.map((item) => {
            newCurrentService.service_id = item.service_id;
            newCurrentService.modules = finalServiceModules;
            newCurrentService._id = item._id
        })

        var finalServices = [...otherService, newCurrentService]

        const UpdateUserInfo = (userupdate) => {
            axios.put(`http://localhost:7000/api/v1/users/${user._id}/update`, userupdate)
            .then(res => {
            })
            .catch(err => {
            })
            moduleUnits2 = moduleUnits;
        }

        const services = finalServices;
        UpdateUserInfo({
            services,
        });
      }
    }

   const number_of_units = units.length;
    return(
        <>
        {loading ?
            <Loader/>
        :
            <main className="px-md-4 wrapper2">
                    {head == "admin" ?
                        <>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h4 style={{marginTop:'2rem', color: '#0d3360'}}>
                                    <div className="returnHome2">
                                        <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} to='/adminmodulepage' state={{ service_id: serv_id }}><span className="home">Accueil</span></Link> <span>/</span> <span className="modulee" style={{fontStyle: 'bold', fontWeight: '550' }}>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</span></p>
                                    </div>
                                </h4>
                                <Link className="return-home" state={{id:module_id, numberOfUnits:number_of_units, title:moduleInfo.title, module_name:moduleInfo.module_name}} style={{textDecoration: 'none'}} to='/addunite'>
                                    <div>
                                        <button style={{width:"11rem"}} className="add-buttons">Ajouter des unités</button>
                                    </div>
                                </Link>
                            </div>
                            {units.length == 0 ?
                                <EmptyPageContent text="Oops!!! aucune unité n'a encore été ajoutée pour ce module" directives="Cliquez sur le bouton Ajouter des unités ci-dessus pour ajouter une unité."/>
                                :
                                <div style={{marginTop:"2rem"}} className="wrapper3">
                                    {units.map((unitData, index)=><UnitsCard key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Unité" + " " + (parseInt(index) + 1)} timePassed={unitData.time_spent} score={unitData.score} module_id={module_id} module_title={moduleInfo.title} module_name={moduleInfo.module_name}/>)}
                                </div>
                            }
                            <div style={{marginTop:"9rem"}}></div>
                            <div style={{marginTop:"15rem"}} className="space-creater"></div>
                            <Footer destination="/adminlegal" style={{marginBottom:"0rem"}}/>
                        </>
                    :
                        <>
                            <div className="ml-3 mr-1">
                                <div className="border-bottom headerTitle">
                                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"-5rem", marginBottom:"-1rem"}}>
                                    <h1><p>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</p></h1>
                                        {/* <button onClick={updateUsersUnites} data-toggle="modal" data-target="#unitUpdated" className="add-buttons" style={{width:"13rem", marginTop:"1.2rem"}}>Mettre à jour les unités</button> */}
                                    </div>
                                </div>
                                <div className="Home_navigation">
                                    <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Unit</span></p>
                                </div>

                                {moduleUnits2.length == 0 ?
                                    <EmptyPageContent text="Oops!!! aucune unité n'a encore été ajoutée pour ce module" directives="Les unités du module seront bientôt ajoutées"/>
                                    :
                                    <div style={{marginTop:"2rem"}} className="wrapper3">
                                        {moduleUnits2.map((unitData, index)=><UnitsCard2 key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Unité" + " " + (parseInt(index) + 1)} timePassed={unitData.unit_time_spent} serviceID={moduleInfo.serviceID} modulesID={module_id} moduleTitle={moduleInfo.title} moduleName={moduleInfo.module_name} time_to_answer={unitData.time} score={unitData.unit_score}/>)}
                                    </div>
                                }

                                <div style={{marginTop:"15rem"}} className="space-creater"></div>
                                <Footer destination="/legalnotice" />
                            </div>
                        </>
                    }
            </main>
        }
        </>
    )
}

export default UnitsPageContent;