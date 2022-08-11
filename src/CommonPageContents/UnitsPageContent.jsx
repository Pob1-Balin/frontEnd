import React, { useState, useEffect} from "react";
import UnitsCard from '../AdminDashboard/components/UnitsCard';
import UnitsCard2 from '../ClientsDashboard/components/UnitsCard';
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";

function UnitsPageContent(props){
    const head = props.display;
    const location = useLocation();
    const moduleInfo = location.state
    const [units, setUnits] = useState([]);
    const module_id = moduleInfo.id
    const module_title = moduleInfo.title.toUpperCase()
    const module_name = moduleInfo.module_name.toUpperCase()

    useEffect(() => {
       axios.get(`${API}/unit/unit/${module_id}`).then(({data})=>{
           setUnits(data.data)
       }).catch((err)=>{
        //    console.log("Something Went Wrong:", err)
       })
       // Aos.init({ duration: 2000 });
   }, []);

   console.log("units content:", units)

   const number_of_units = units.length;
    return(
        <>
            <main className="px-md-4 wrapper2">
                {head=="admin" ?
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
                             <EmptyPageContent text="Oopps!!! no units have been added for this module" directives="Click on the add units button above to add a unit."/>
                             :
                             <div style={{marginTop:"2rem"}} className="wrapper3">
                                 {units.map((unitData, index)=><UnitsCard key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Units" + " " + (parseInt(index) + 1)} timePassed={unitData.time_spent} score={unitData.score} module_id={module_id} module_title={moduleInfo.title} module_name={moduleInfo.module_name} />)}
                             </div>
                        }
                        <div style={{marginTop:"15rem"}} className="space-creater"></div>
                        <Footer destination="/adminlegal" />
                    </>
                :
                    <>
                        <div className="module-resizing-cards justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                            <h1 className="h2" style={{ color: '#0d3360' }}><b>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</b></h1>
                        </div>
                        <h4 style={{paddingTop:"7px"}}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/clientservicedashboard'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Unites</span></p></h4>

                        {units.length == 0 ? 
                             <EmptyPageContent text="Oopps!!! no units have been added for this module" directives="The module's units will soon be added"/>
                             :
                             <div style={{marginTop:"2rem"}} className="wrapper3">
                                 {units.map((unitData, index)=><UnitsCard2 key={unitData._id} id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Units" + " " + (parseInt(index) + 1)} timePassed={unitData.time_spent} score={unitData.score}/>)}
                             </div>
                        }

                        <div style={{marginTop:"15rem"}} className="space-creater"></div>
                        <Footer destination="/legalnotice" />
                    </>
                }
            </main>
        </>
    )
}

export default UnitsPageContent;