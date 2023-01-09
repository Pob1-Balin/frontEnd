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
  const navigate = useNavigate();
  // window.addEventListener("beforeunload", (event) => {
  //   localStorage.setItem('redirectserv', false);
  // });
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  var serviceInfo = location.state
  const serviceId = serviceInfo.service_id;
  const head = props.display;
  const { user } = useSelector((state) => state.auth)

  //get all service modules ----------------
  const [module, setModule] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
      window.scrollTo(0, 0);

      if(head != 'admin'){
        axios.get(`${API}/users`).then(({ data }) => {
            setUsers(data.data);
        })
        .catch((error) => {
        });
      }

      axios.get(`${API}/module/servModule/${serviceId}`).then(({data})=>{
          setModule(data.data)
          setLoading(false)
      }).catch((err)=>{
        setLoading(false)
      })
  }, [refresh]);
 
  var currentUserModules = [];
  var currentUserUnits = [];
  var userModules = [];
  var otherModules = [];
  var update = 0;

  if(!loading){
    if(head != "admin"){

      users.map((item) => {
        if(item._id === user._id){
            currentUserModules = [...currentUserModules, ...item.modules]
            currentUserUnits = [...currentUserUnits, ...item.units]
        }
      })
  
      currentUserModules.map((item) => {
        if(item.service_id == serviceId){
          userModules = [...userModules, item]
        }else{
          otherModules = [...otherModules, item]
        }
      })
  
      module.map((item) => {
          if(userModules.find(e => e.module_id === item._id)){
          }else{
            update += 1;
            item.service_id = serviceId;
            item.module_id = item._id;
            item.time_spent = "0";
            item.score = "0";
            userModules = [...userModules, item];
          }
    
          userModules.map((item2) => {
            if(item2.module_id === item._id){
              if(item2.title != item.title){
                update += 1;
                item2.title = item.title;
              }
              if(item2.image != item.image){
                update += 1;
                item2.image = item.image;
              }
            }
          })
    
      })  
  
    const submitUserInfo = (userupdate) => {
      axios.put(`${API}/users/${user._id}/update`, userupdate)
        .then(res => {
        })
        .catch(err => {
        })
  
      }
  
    if(update > 0){
      submitUserInfo({
          modules: [...otherModules, ...userModules]
      });
    }
    }
  }
   
  const number_of_modules = module.length;
  const moveTo = () => {
    localStorage.setItem('redirectaddserv', true);
    navigate("/addmodule", {state:{id:serviceId, numberOfModules:number_of_modules}});
  }

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
                    <a onClick={moveTo} className="return-home" style={{textDecoration: 'none'}}>
                        <div>
                            <button className="add-buttons" style={{width:"11rem"}}>Ajouter un module</button>
                        </div>
                    </a>
                </div>
                
                {module.length == 0 ?
                  <EmptyPageContent text="Oops!!! module pour ce cours n'a pas été ajouté" directives="Cliquez sur le bouton Ajouter des modules ci-dessus pour ajouter un module."/>
                  :
                  <div style={{marginTop:"2rem"}} className="wrapper3">
                    {module.map((moduleData, index)=><Module2 key={moduleData._id} id={moduleData._id} image={moduleData.image} title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} score={moduleData.score} service_id={serviceId} refresh={refresh} setRefresh={setRefresh}/> )}
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
                      {/* <button onClick={() => upadteModules()} data-toggle="modal" data-target="#unitUpdated" className="add-buttons" style={{width:"14rem", marginTop:"1.2rem"}}>Mettre à jour les modules</button> */}
                  </div>
                </div>
                <div className="Home_navigation">
                    <p><span className="home return-home">Accueil /</span> <span style={{color: '#0d3360'}}>Modules</span></p>
                </div>

                {userModules.length == 0 ?
                  <EmptyPageContent text="Oops!!! module pour ce cours n'a pas été ajouté" directives="Les modules de ce cours seront bientôt ajoutés"/>
                  :
                  <div style={{marginTop:"2.5rem"}} className="wrapper3">
                    {userModules.map((moduleData, index)=><Module1 key={moduleData._id} id={moduleData._id} moduleUnits={moduleData.units} image={moduleData.image} title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} serviceID={serviceId} score={moduleData.score} currentUserUnits={currentUserUnits} />)}
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