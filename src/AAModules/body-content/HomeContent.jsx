import React from "react";
import Modules from '../components/Modules';
import Footer from '../components/Footer';
import "../AdminApp.css";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from '../../config'



function HomeContent() {
  const location = useLocation();
  const serviceID = location.state;
  console.log(serviceID)
  const [modul, setModul] = useState([]);

    
  useEffect(() => {
    axios
      .get(`${API}/modul`)
      .then(({ data }) => {
        setModul(data.data)
        const res = data.data
        console.log(res);
        setModul(res)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <main className="px-md-4 wrapper2">
        <div style={{ marginTop: '-5rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h4 style={{ marginTop: '2rem' }}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/admindashboard'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Modules</span></p></h4>
          <Link className="return-home" style={{ textDecoration: 'none' }} to='/addmodule' state={serviceID}>
            <div>
              <button className="add-buttons">Add Modules</button>
            </div>
          </Link>
        </div>
        <div className="wrapper">
          {/* <Modules image="./images/Module1.png" module_name="MODULE 1" title="Panorama de la SSI" module_page="/editmodule1"/>
                     <Modules image="./images/Module2.png" module_name="MODULE 2" title="Sécurité de l’authentification" module_page="/editmodule2"/>
                     <Modules image="./images/Module3.png" module_name="MODULE 3" title="Sécurité sur Internet" module_page="/editmodule3"/>
                     <Modules image="./images/ModuleA4.png" module_name="MODULE 4" title="Sécurité du poste de travail et nomadisme" module_page="/editmodule4"/> */}

          {modul.map((module) => {
            return(
              serviceID == module.serviceID 
              ? <Modules key={module._id} id={module._id} modulID={module.moduleID} image={module.image} module_name={module.name} title={module.title} module_page={module.score} score={module.score} timePassed={module.timePassed} />
              :<div style={{display:'none'}}></div>)
            })}
          {/* {modul.map((mod)=>{
                      console.log(mod._id)
                    })} */}

        </div>



        <Footer />
      </main>

    </>
  )
}

export default HomeContent;