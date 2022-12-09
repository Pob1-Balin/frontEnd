import React, { useEffect, useState} from "react";
import Footer from '../ClientsDashboard/components/Footer';
import Module1 from '../ClientsDashboard/components/Modules';
import Module2 from '../AdminDashboard/components/Modules';
import "../AdminDashboard/admin.css";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";
import Loader from "./Loader";

function ModulesPageContent(props) {
  const [loading, setLoading] = useState(true);

  const location = useLocation()
  var serviceInfo = location.state
  
  const serviceId = serviceInfo.id;
  const head = props.display;

  const userId = "62f47d3b149cacf97e1a9a70";

  const [module, setModule] = useState([]);
  const [userServs, setUserServs] = useState([]);
  useEffect(() => {
      axios.get(`${API}/module/servModule/${serviceId}`).then(({data})=>{
          setModule(data.data)
        //  console.log(data.data)
      }).catch((err)=>{
        //  console.log("Something Went Wrong:", err)
      })

      axios.get(`${API}/serv/getserv/${userId}`).then(({ data }) => {
        setUserServs(data.data)
        setLoading(false)
      }).catch((err) => {
        //  console.log("Something Went Wrong:", err)
      });
      // Aos.init({ duration: 2000 });
  }, []);



  const submitUserModules = (userupdate) => {
    const userId = "62f47d3b149cacf97e1a9a70";
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

   var service_modules = [];
   var specific_service = [];
   var another_service = [{}];
   var specific_service_index;
   userServices.map((item, index) => {
    another_service = [...another_service, item];
    if(item.service_id === serviceId){
        service_modules = [...service_modules, item.modules];
        specific_service = item;
        specific_service_index = index;
    }
   })

   another_service.splice(0,1);
   console.log("--------------",another_service)


    if(head !== "admin"){
      var final_user_modules = [];
      service_modules.map((item) => {
        item.map((item2) => {
          final_user_modules = [...final_user_modules, item2];
        })
      })
    }

    const updateUsersModules = () => {
      var modules_not_added = [];
      var new_m = []
      module.map((item) => {
          if(final_user_modules.find(e => e.module_id === item._id)){
          }else{
            //  new_m = [...new_m, item._id];
            //  item.
             delete item.service_id
             delete item.score
             delete item.createdAt
             delete item.updatedAt
             delete item.__v
             delete item.updatedAt
             delete item.time_spent
             modules_not_added = [...modules_not_added, item];
          }
      })

      if(final_user_modules.length !== module.length){
        //Getting units for each module and asigning it to the units field of the module
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
              final_user_modules.splice(0,0, item);
          }).catch((err)=>{
          })
        })}

        specific_service.modules = final_user_modules;

        another_service.splice(specific_service_index,1, specific_service);

         var services = [{}];
         services = another_service;
         submitUserModules({
             services
         });
        console.log("final service:", services)

      }

    }

  const number_of_modules = module.length;
  return (
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
                        <h5 class="modal-title" id="exampleModalLabel">Modules Updates</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <p style={{color:"gray"}}>Your modules have been updated!!!</p>
                    </div>

                    <div style={{borderTop:"1px solid #F5F5F5"}} class="modal-footer">
                        <button style={{width:"4rem"}} type="submit" data-dismiss="modal" name="update unites" class="btn btn-info">ok</button>
                    </div>
                </div>
            </div>
        </div>
        {head === "admin" ?
            <>
              <div>
                <div className="module-margin d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3 border-bottom modulehome">
                  <h4><p><Link className="return-home" style={{textDecoration: 'none'}} to='/services'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Modules</span></p></h4>
                  <Link className="return-home" style={{textDecoration: 'none'}} state={{id:serviceId, numberOfModules:number_of_modules}} to='/addmodule' >
                    <div>
                      <button className="add-buttons mb-2">Add Modules</button>
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
                      <button onClick={updateUsersModules} data-toggle="modal" data-target="#unitUpdated" className="add-buttons" style={{width:"14rem", marginTop:"1.2rem"}}>Mettre à jour les modules</button>
                  </div>
                </div>
                <div className="Home_navigation">
                    <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard'><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Modules</span></p>
                </div>

                {module.length == 0 ?
                  <EmptyPageContent text="Oops!!! module pour ce cours n'a pas été ajouté" directives="Les modules de ce cours seront bientôt ajoutés"/>
                  :
                  <div style={{marginTop:"2.5rem"}} className="wrapper3">
                    {module.map((moduleData, index)=><Module1 key={moduleData._id} id={moduleData._id} image={moduleData.image} title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} serviceID={serviceId} score={moduleData.score} />)}
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