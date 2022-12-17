import React, { useEffect, useState} from "react";
import Footer from '../ClientsDashboard/components/Footer';
import Module1 from '../ClientsDashboard/components/Modules';
import Module2 from '../AdminDashboard/components/Modules';
import "../AdminDashboard/admin.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";
import Loader from "./Loader";

function ModulesPageContent(props) {
    const navigation = useNavigate();
    
    window.addEventListener("beforeunload", (event) => {
       localStorage.setItem('redirectserv', false);
    });

  if(JSON.parse(localStorage.getItem("refreshmodules")) == "true"){
    localStorage.removeItem("refreshmodules")
    localStorage.setItem('refreshmodules', JSON.stringify("false"));
    window.location.reload();
  }
 
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  var serviceInfo = location.state
  const serviceId = serviceInfo.service_id;
  const head = props.display;

  const { user } = useSelector((state) => state.auth)

  //get all service modules ----------------
  const [module, setModule] = useState([]);
  useEffect(() => {
      window.scrollTo(0, 0);
      axios.get(`${API}/module/servModule/${serviceId}`).then(({data})=>{
          setModule(data.data)
          setLoading(false)
      }).catch((err)=>{
        setLoading(false)
      })
  }, []);

  var userServices = user.services
  var currentUserService = {};
  var userOtherServices = [];
  {userServices.map((item) => {
    if(serviceId === item.service_id){
      currentUserService = item;
    }else{
      userOtherServices = [...userOtherServices, item]
    }
  })}

  var currentUserModules = currentUserService.modules
   
  const submitUserInfo = (userupdate) => {
    axios.put(`http://localhost:7000/api/v1/users/${user._id}/update`, userupdate)
      .then(res => {
      })
      .catch(err => {
      })
  }

  //compare them both
  const upadteModules = () => {
    if(module.length != currentUserModules.length){
      var modules_not_added = [];
  module.map((item) => {
    if(currentUserModules.find(e => e.module_id === item._id)){
    }else{
       delete item.service_id
       delete item.createdAt
       delete item.updatedAt
       delete item.__v
       modules_not_added = [...modules_not_added, item];
    }
      })

     {modules_not_added.map((item) => {
      item.module_id = item._id;
      axios.get(`${API}/unit/unit/${item._id}`).then(({data})=>{
          data.data.map((item2) => {
              item2.unit_id = item2._id
              item2.unit_time_spent = "0"
              item2.unit_score = "0"
              item2.questions_answered = "0"
          })
          item.units = data.data;
      }).catch((err)=>{
      })
  
     })}

     var userCompleteModules = [...currentUserModules, ...modules_not_added]

     serviceInfo.modules = userCompleteModules;
  
    //service to be submitted
    var service_to_be_submitted =  [...userOtherServices, serviceInfo];
      const services = service_to_be_submitted;
      submitUserInfo({
          services,
      });
    }
  }

  var userServices2 = user.services
  var currentUserService2 = {};
  var userOtherServices2 = [];
  {userServices2.map((item) => {
    if(serviceId === item.service_id){
      currentUserService2 = item;
    }else{
      userOtherServices2 = [...userOtherServices2, item]
    }
  })}

  var currentUserModules2 = currentUserService2.modules
  const number_of_modules = module.length;

  return (
    <>
      {loading ?
        <Loader/>
        :
        <main className="px-md-4 wrapper2">
        {head === "admin" ?
            <>
              <div className="ml-2 mr-1">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom resource-page">
                    <h4 style={{marginTop:'2rem', color: '#0d3360'}}>
                      <div className="returnHome2">
                           <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} to='/services'><span className="home">Accueil</span></Link> <span>/</span> <span style={{fontStyle: 'bold'}}>Modules</span></p>
                      </div>
                    </h4>
                    <Link className="return-home" style={{textDecoration: 'none'}} to='/addmodule' state={{id:serviceId, numberOfModules:number_of_modules}}>
                        <div>
                            <button className="add-buttons" style={{width:"11rem"}}>Ajouter un module</button>
                        </div>
                    </Link>
                </div>
                
                {module.length == 0 ?
                  <EmptyPageContent text="Oops!!! module pour ce cours n'a pas été ajouté" directives="Cliquez sur le bouton Ajouter des modules ci-dessus pour ajouter un module."/>
                  :
                  <div style={{marginTop:"2rem"}} className="wrapper3">
                    {module.map((moduleData, index)=><Module2 key={moduleData._id} id={moduleData._id} image={moduleData.image} title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} score={moduleData.score} service_id={serviceId}/> )}
                  </div>
                }
                 <div style={{marginTop:"10rem"}}></div>
                <div style={{marginTop:"14rem"}} className="space-creater"></div>
                <Footer destination="/adminlegal" />
              </div>
            </>

            :

            <>
              <main className="ml-2 mr-1">
                <div className="border-bottom headerTitle">
                  <div style={{display:"flex", justifyContent:"space-between", marginTop:"-5rem", marginBottom:"-1rem"}}>
                    <h1><p>Modules</p></h1>
                      <button onClick={() => upadteModules()} data-toggle="modal" data-target="#unitUpdated" className="add-buttons" style={{width:"14rem", marginTop:"1.2rem"}}>Mettre à jour les modules</button>
                  </div>
                </div>
                <div className="Home_navigation">
                    <p><span className="home return-home">Accueil /</span> <span style={{color: '#0d3360'}}>Modules</span></p>
                </div>

                {currentUserModules2.length == 0 ?
                  <EmptyPageContent text="Oops!!! module pour ce cours n'a pas été ajouté" directives="Les modules de ce cours seront bientôt ajoutés"/>
                  :
                  <div style={{marginTop:"2.5rem"}} className="wrapper3">
                    {currentUserModules2.map((moduleData, index)=><Module1 key={moduleData._id} id={moduleData._id} moduleUnits={moduleData.units} image={moduleData.image} title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} serviceID={serviceId} score={moduleData.score} />)}
                  </div>
                }
                <div style={{marginTop:"12rem"}} className="space-creater"></div>
                <Footer destination="/legalnotice" />
              </main>
            </>
        }
        </main>
      }
    </>
  )
}

export default ModulesPageContent;