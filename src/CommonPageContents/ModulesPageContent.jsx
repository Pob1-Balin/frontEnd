import React, { useEffect, useState} from "react";
import Footer from '../ClientsDashboard/components/Footer';
import Module1 from '../ClientsDashboard/components/Modules';
import Module2 from '../AdminDashboard/components/Modules';
import "../AdminDashboard/admin.css";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";

function ModulesPageContent(props) {
  const location = useLocation()
  var serviceInfo = location.state
  const serviceId = serviceInfo.id
  const head = props.display;

  const [module, setModule] = useState([]);
  useEffect(() => {
      axios.get(`${API}/module/servModule/${serviceId}`).then(({data})=>{
          setModule(data.data)
        //  console.log(data.data)
      }).catch((err)=>{
        //  console.log("Something Went Wrong:", err)
      })
      // Aos.init({ duration: 2000 });
  }, []);

  const number_of_modules = module.length;
  return (
    <>
       <main className="px-md-4 wrapper2">
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
              <EmptyPageContent text="Oopps!!! no modules for this service have been added" directives="Click on the add modules button above to add a module."/>
              :
              <div style={{marginTop:"2rem"}} className="wrapper3">
                 {module.map((moduleData, index)=><Module2 key={moduleData._id} id={moduleData._id} image={moduleData.image} title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} score={moduleData.score} service_id={serviceId} /> )}
              </div>
             }
            <div style={{marginTop:"14rem"}} className="space-creater"></div>
            <Footer destination="/adminlegal" />
          </div>
         </>

         :

         <>
          <div className="module-resizing-cards justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
              <h1 className="h2" style={{ color: '#0d3360' }}><b>MODULES</b></h1>
          </div>
          <h4 style={{paddingTop:"7px"}}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Modules</span></p></h4>

          {module.length == 0 ?
            <EmptyPageContent text="Oopps!!! no modules for this service have been added" directives="This service's modules will soon be added"/>
            :
            <div style={{marginTop:"2rem"}} className="wrapper3">
              {module.map((moduleData, index)=><Module1 key={moduleData._id} id={moduleData._id} image="./images/Cature.png" title={moduleData.title} module_name={"Module" + " " + (parseInt(index) + 1)} timePassed={moduleData.time_spent} score={moduleData.score} />)}
            </div>
          }
          <div style={{marginTop:"12rem"}} className="space-creater"></div>
          <Footer destination="/legalnotice" />
         </>
       }
       </main>
    </>
  )
}

export default ModulesPageContent;