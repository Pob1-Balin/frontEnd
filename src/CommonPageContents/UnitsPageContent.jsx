import React, { useState, useEffect} from "react";
import UnitsCard from '../AdminDashboard/components/UnitsCard';
import UnitsCard2 from '../ClientsDashboard/components/UnitsCard';
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";
import Loader from "./Loader";

function UnitsPageContent(props){
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const head = props.display;
    const location = useLocation();
    const moduleInfo = location.state
    const module_id = moduleInfo.id
    const module_title = moduleInfo.title.toUpperCase()
    const module_name = moduleInfo.module_name.toUpperCase()

    const userId = "62f47d3b149cacf97e1a9a70";

    const [units, setUnits] = useState([]);
    const [userServs, setUserServs] = useState([]);
    useEffect(() => {
       axios.get(`${API}/unit/unit/${module_id}`).then(({data})=>{
           setUnits(data.data)
       }).catch((err)=>{
        //    console.log("Something Went Wrong:", err)
       })

       axios.get(`${API}/serv/getserv/${userId}`).then(({ data }) => {
           setUserServs(data.data)
           setLoading(false)
       }).catch((err) => {
           //  console.log("Something Went Wrong:", err)
       });
       // Aos.init({ duration: 2000 });
   }, []);


    const submitUserUnits = (userupdate) => {
        axios.put(`http://localhost:7000/api/v1/serv/update/${userId}`, userupdate)
            .then(res => {
            })
            .catch(err => {
            })
    }
      //--- geting unit's service ----
      var userServices = [{}];
      {userServs.map((item) => {
          userServices = item.services;
      })}

      //--- geting unit's module ----
      var service_modules = [];
      userServices.map((item) => {
          if(item.service_id === moduleInfo.serviceID){
              service_modules = [...service_modules, item.modules]
          }
      })

    if(head !== "admin"){
        //--- geting all units fron unit's module ----
        var modules_units = [];
        service_modules.map((item) => {
            item.map((item2) => {
                if(item2.module_id === module_id){
                    modules_units = [...modules_units, item2.units]
                }
            })
        })

        //--- geting specific unit ----
        var Units = 0;
        var units2 = [];
        modules_units.map((item) => {
            Units = Units + item.length;
            item.map((item2) => {
                units2 = [...units2, item2];
            })
        })

        console.log("unit:", units)
        console.log("user units:", units2)


    }

    const updateUsersUnites = () => {
        var units_not_added = [];
        units.map((item) => {
            if(units2.find(e => e.unit_id === item._id)){
            }else{
                units_not_added = [...units_not_added, item];
            }
        })
        if(Units !== units.length){

            units_not_added.map((item) => {
                item.unit_id = item._id
                item.unit_time_spent = "0"
                item.unit_score = "0"
                item.questions_answered = "0"
                units2.splice(0,0, item);
            })

            service_modules.map((item) => {
                item.map((item2) => {
                    if(item2.module_id === module_id){
                        item2.units =  units2;
                    }
                })
            })

            var services = [{}];
            {userServs.map((item) => {
                    services = item.services
            })}

            submitUserUnits({
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
                    {/*-- Modal =====*/}
                    <div class="modal fade" id="unitUpdated" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Units Updates</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div class="modal-body">
                                    <p style={{color:"gray"}}>Your units have been updated!!!</p>
                                </div>

                                <div style={{borderTop:"1px solid #F5F5F5"}} class="modal-footer">
                                    <button style={{width:"4rem"}} type="submit" data-dismiss="modal" name="update unites" class="btn btn-info">ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {head == "admin" ?
                        <>
                            <div className="module-margin d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                                <h4><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</span></p></h4>
                                <Link className="return-home" state={{id:module_id, numberOfUnits:number_of_units, title:moduleInfo.title, module_name:moduleInfo.module_name}} style={{textDecoration: 'none'}} to='/addunite'>
                                    <div>
                                        <button className="add-buttons">Add Unites</button>
                                    </div>
                                </Link>
                            </div>
                            {units.length == 0 ?
                                <EmptyPageContent text="Oops!!! aucune unité n'a encore été ajoutée pour ce module" directives="Cliquez sur le bouton Ajouter des unités ci-dessus pour ajouter une unité."/>
                                :
                                <div style={{marginTop:"2rem"}} className="wrapper3">
                                    {units.map((unitData, index)=><UnitsCard key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Units" + " " + (parseInt(index) + 1)} timePassed={unitData.time_spent} score={unitData.score} module_id={module_id} module_title={moduleInfo.title} module_name={moduleInfo.module_name}/>)}
                                </div>
                            }
                            <div style={{marginTop:"15rem"}} className="space-creater"></div>
                            <Footer destination="/adminlegal" />
                        </>
                    :
                        <>
                        <div className="ml-3 mr-1">
                            <div className="border-bottom headerTitle">
                                <div style={{display:"flex", justifyContent:"space-between", marginTop:"-5rem", marginBottom:"-1rem"}}>
                                <h1><p>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</p></h1>
                                    <button onClick={updateUsersUnites} data-toggle="modal" data-target="#unitUpdated" className="add-buttons" style={{width:"13rem", marginTop:"1.2rem"}}>Mettre à jour les unités</button>
                                </div>
                            </div>
                            <div className="Home_navigation">
                                <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Unit</span></p>
                            </div>

                            {units2.length == 0 ?
                                <EmptyPageContent text="Oops!!! aucune unité n'a encore été ajoutée pour ce module" directives="Les unités du module seront bientôt ajoutées"/>
                                :
                                <div style={{marginTop:"2rem"}} className="wrapper3">
                                    {units2.map((unitData, index)=><UnitsCard2 key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Units" + " " + (parseInt(index) + 1)} timePassed={unitData.unit_time_spent} serviceID={moduleInfo.serviceID} modulesID={module_id} moduleTitle={moduleInfo.title} moduleName={moduleInfo.module_name} time_to_answer={unitData.time} score={unitData.unit_score}/>)}
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