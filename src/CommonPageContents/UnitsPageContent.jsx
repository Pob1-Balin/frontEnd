import React, { useState, useEffect} from "react";
import UnitsCard from '../AdminDashboard/components/UnitsCard';
import UnitsCard2 from '../ClientsDashboard/components/UnitsCard';
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config'

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


    // units.map((item)=>{
    //     console.log("testttt",item.unit_content[0].admin_route)
    //     console.log("clll",item.unit_content[0].client_route)
    //     console.log("clll",item.unit_content.length)
    // })



    return(
        <>
            <main className="px-md-4 wrapper2">
                {head=="admin" ?
                    <>
                        <div className="module-margin d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                            <h4><p><Link className="return-home" style={{textDecoration: 'none'}} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</span></p></h4>
                            <Link className="return-home" state={moduleInfo} style={{textDecoration: 'none'}} to='/addunite'>
                                <div>
                                     <button className="add-buttons">Add Unites</button>
                                </div>
                            </Link>
                        </div>
                        <div style={{marginTop:"2rem"}} className="wrapper3">
                             {units.map((unitData)=><UnitsCard key={unitData._id} id={unitData._id} unit_id={unitData._id} image="./images/Cature.png" title={unitData.title} module_name={unitData.name} timePassed={unitData.time_spent} score={unitData.score} />)}
                        </div>
                        <div style={{marginTop:"15rem"}} className="space-creater"></div>
                        <Footer destination="/adminlegal" />
                    </>
                :
                    <>
                    <div className="module-resizing-cards justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                         <h1 className="h2" style={{ color: '#0d3360' }}><b>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</b></h1>
                    </div>
                    <h4 style={{paddingTop:"7px"}}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/clientservicedashboard'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Unites</span></p></h4>
                    <div style={{marginTop:"2rem"}} className="wrapper3">
                         {units.map((unitData)=><UnitsCard2 key={unitData._id} id={unitData._id} image="./images/Cature.png" title={unitData.title} module_name={unitData.name} timePassed={unitData.time_spent} score={unitData.score}/>)}
                    </div>
                    <div style={{marginTop:"15rem"}} className="space-creater"></div>
                    <Footer destination="/legalnotice" />
                    </>
                }
            </main>
        </>
    )
}

export default UnitsPageContent;