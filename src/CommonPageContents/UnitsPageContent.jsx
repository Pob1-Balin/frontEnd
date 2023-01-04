import React, { useState, useEffect} from "react";
import UnitsCard from '../AdminDashboard/components/UnitsCard';
import UnitsCard2 from '../ClientsDashboard/components/UnitsCard';
import Footer from '../ClientsDashboard/components/Footer';
import "../AdminDashboard/admin.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { API } from '../config'
import EmptyPageContent from "./EmptyPageContent";
import Loader from "./Loader";

function UnitsPageContent(props){
    const [refresh, setRefresh] = useState(0);
    const navigate = useNavigate()
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
    const [users, setUsers] = useState([]);
    const [units, setUnits] = useState([]);
    useEffect(() => {
       window.scrollTo(0, 0);

        if(head !=  'admin'){
            axios.get(`${API}/users`).then(({ data }) => {
                setUsers(data.data);
            })
            .catch((error) => {
            });
        }

       axios.get(`${API}/unit/unit/${module_id}`).then(({data})=>{
           setUnits(data.data)
           setLoading(false)
       }).catch((err)=>{
           setLoading(false)
       })
    
    }, [refresh]);

    var currentUserUnits = [];
    var userUnits = [];
    var otherUnits = [];

if(!loading){
    if(head != "admin"){
        const submitUserInfo = (userupdate) => {
            axios.put(`${API}/users/${user._id}/update`, userupdate).then(res => {

              })
              .catch(err => {
              })
        }

        users.map((item) => {
            if(item._id === user._id){
                currentUserUnits = [...currentUserUnits, ...item.units]
            }
        })

        currentUserUnits.map((item) => {
            if(item.module_id == module_id){
              userUnits = [...userUnits, item]
            }else{
              otherUnits = [...otherUnits, item]
            }
        })

        var update = 0;
        units.map((item) => {
            if(userUnits.find(e => e._id === item._id)){
            }else{
              update += 1;
              item.unit_time_spent = "0";
              item.number_of_question = "0";
              item.questions_answered = "0"
              item.unit_score = "0";
              userUnits = [...userUnits, item];
            }
      
            userUnits.map((item2) => {
              if(item2._id === item._id){
                if(item2.title != item.title){
                  update += 1;
                  item2.title = item.title;
                }
                if(item2.image != item.image){
                    update += 1;
                    item2.image = item.image;
                }
                if(item2.number_of_question != item.number_of_question){
                    update += 1;
                    item2.number_of_question = item.number_of_question;
                }
              }
            })
      
        }) 
       
        if(update > 0){
            submitUserInfo({
                units: [...otherUnits, ...userUnits]
            });
        }

    }

}
    const moveto = () => {
        localStorage.setItem('redirectserv', true);
        navigate("/adminmodulepage", {state:{ service_id: serv_id }});
    }

    const moveTo = () => {
        localStorage.setItem('redirectaddserv', true);
        navigate("/addunite", {state:{id:module_id, numberOfUnits:number_of_units, title:moduleInfo.title, module_name:moduleInfo.module_name}});
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
                                        <p><a onClick={() => moveto()} className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} href='#'><span className="home">Accueil</span></a> <span>/</span> <span className="modulee" style={{fontStyle: 'bold', fontWeight: '550' }}>{module_title != "" ?   module_name + " " + ":" + " " + module_title  : "" }</span></p>
                                    </div>
                                </h4>
                                <a onClick={moveTo} href="#" className="return-home" style={{textDecoration: 'none'}}>
                                    <div>
                                        <button style={{width:"11rem"}} className="add-buttons">Ajouter des unités</button>
                                    </div>
                                </a>
                            </div>
                            {units.length == 0 ?
                                <EmptyPageContent text="Oops!!! aucune unité n'a encore été ajoutée pour ce module" directives="Cliquez sur le bouton Ajouter des unités ci-dessus pour ajouter une unité."/>
                                :
                                <div style={{marginTop:"2rem"}} className="wrapper3">
                                    {units.map((unitData, index)=><UnitsCard key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Unité" + " " + (parseInt(index) + 1)} timePassed={unitData.time_spent} score={unitData.score} module_id={module_id} module_title={moduleInfo.title} module_name={moduleInfo.module_name} refresh={refresh} setRefresh={setRefresh}/>)}
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

                                {userUnits.length == 0 ?
                                    <EmptyPageContent text="Oops!!! aucune unité n'a encore été ajoutée pour ce module" directives="Les unités du module seront bientôt ajoutées"/>
                                    :
                                    <div style={{marginTop:"2rem"}} className="wrapper3">
                                        {userUnits.map((unitData, index)=><UnitsCard2 key={unitData._id} id={unitData._id} unit_id={unitData._id} image={unitData.image} title={unitData.title} unit_name={"Unité" + " " + (parseInt(index) + 1)} timePassed={unitData.unit_time_spent} serviceID={moduleInfo.serviceID} modulesID={module_id} moduleTitle={moduleInfo.title} moduleName={moduleInfo.module_name} time_to_answer={unitData.time} number_of_question={unitData.number_of_question} questions_answered={unitData.questions_answered} currentUserUnits={currentUserUnits} />)}
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