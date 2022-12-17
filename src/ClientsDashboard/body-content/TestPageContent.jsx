import React, { useEffect, useState, useRef } from "react";
import "../../AdminDashboard/admin.css";
import "../../AdminDashboard/profile.css"
import Footer from '../components/Footer'
import { useLocation } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { API } from '../../config'
import CountDown from "../components/CountDown";
import { useNavigate } from 'react-router-dom'
function TestPageContent(){
    const navigate = useNavigate();
    const location = useLocation()
    var TestUnitInfo = location.state
    const testUnit_id = TestUnitInfo.id
    const serviceid = TestUnitInfo.serviceID;
    const moduleid = TestUnitInfo.modulesID;

    const [answers, setAnswers] = useState([]);
    const [units, setUnits] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${API}/answer/answer/${testUnit_id}`).then(({data})=>{
            setAnswers(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })

        axios.get(`${API}/unit/units/${testUnit_id}`).then(({data})=>{
            setUnits(data.data)
            }).catch((err)=>{
            //    console.log("Something Went Wrong:", err)
            })

        if(document.readyState === 'complete'){
             handleFetchData();
        }
        Aos.init({ duration: 2000 });
    }, []);

    const [firstelement, setFirstElement] = useState(0);
    const [lastelement, setLastElement] = useState(1);
    // const shuffle_answers = answers.sort(() => Math.random() - 0.5);
    const slice = answers.slice(firstelement, lastelement);
    const [values, setValues] = useState({ submittedAnswers: [] });

    const handleChange = (event) => {
        const { value, checked } = event.target;
        const { submittedAnswers } = values;

        // console.log(`${value} is ${checked}`);
        if(checked){
            setValues({
                submittedAnswers: [...submittedAnswers, value],
            });
        }else{
            setValues({
                 submittedAnswers: submittedAnswers.filter((event) => event !== value)
            });
        }
    }

    const [userServs, setUserServs] = useState([]);
    const handleFetchData = async (e) => {
        const userId = "62f47d3b149cacf97e1a9a70";
        axios.get(`${API}/serv/getserv/${userId}`).then(({ data }) => {
            setUserServs(data.data)
        }).catch((err) => {
            //  console.log("Something Went Wrong:", err)
        });
    };

    //--- geting unit's service ----
    var userServices = [{}];
    {userServs.map((item) => {
        userServices = item.services;
    })}

    //--- geting unit's module ----
    var service_modules = [];
    userServices.map((item) => {
        if(item.service_id === serviceid){
            service_modules = [...service_modules, item.modules]
        }
    })

    //--- geting all units fron unit's module ----
    var modules_units = [];
    service_modules.map((item) => {
        item.map((item2) => {
            if(item2.module_id === moduleid){
                modules_units = [...modules_units, item2.units]
            }
        })
    })

    //--- geting specific unit ----
    var questions_answered = "";
    var unitScore = "";
    modules_units.map((item) => {
        item.map((item2) => {
            if(item2.unit_id === testUnit_id){
                questions_answered = item2.questions_answered;
                unitScore = item2.unit_score;
            }
        })
    })

    if(parseInt(questions_answered) === parseInt(units.number_of_question)){
        // navigate('/unitsclients', {state:{id:moduleid, title:TestUnitInfo.moduleTitle, module_name:TestUnitInfo.moduleName}});
    }

    const submitUnit = (unitInfo) => {
        const userId = "62f47d3b149cacf97e1a9a70";
        axios.put(`http://localhost:7000/api/v1/serv/update/${userId}`, unitInfo)
            .then(res => {
            })
            .catch(err => {
            })
    }



    document.addEventListener("DOMContentLoaded", () => {
       handleFetchData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const { submittedAnswers } = values;
        var correctAnswers = [];
        slice.map((item)=>{ correctAnswers = item.correct_answer; })

         var num = 0;
         if(submittedAnswers.length == correctAnswers.length){
            submittedAnswers.forEach((element) => {
                if(correctAnswers.includes(element)){
                    num = num + 1;
                }
            })
         }


        const number_of_question_answered = parseInt(questions_answered) + 1;
        if(correctAnswers.length == num){
            const question_percentage = parseFloat(unitScore) + ( (1/units.number_of_question) * 100 );
            modules_units.map((item) => {
                item.map((item2) => {
                    if(item2.unit_id === testUnit_id){
                        item2.unit_score = question_percentage;
                        item2.questions_answered = number_of_question_answered;
                        //  Units = item2
                    }
                })
            })

            var services = [{}];
            {userServs.map((item) => {
                services = item.services;
            })}

            console.log(services)

            submitUnit({
                services,
            })

        }else{
            modules_units.map((item) => {
                item.map((item2) => {
                    if(item2.unit_id === testUnit_id){
                        item2.questions_answered = number_of_question_answered;
                    }
                })
            })
            var services = [{}];
            {userServs.map((item) => {
                services = item.services;
            })}

            console.log(services)
            submitUnit({
                services,
            })
        }

         setValues({ submittedAnswers: []});
         setFirstElement(firstelement + 1);
         setLastElement(lastelement + 1);

         var clist = document.getElementsByTagName("input");
         for (var i = 0; i < clist.length; ++i){clist[i].checked = false; }

         handleFetchData();
    }

    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                <div className="all-content-wrapper testedit testedit timmer">
                    <div className="product-sales-area graph-container">
                        <div className="container-fluid">
                            <div className="row addQuestions">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-sales-chart">
                                        <div className="portlet-title">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="caption pro-sl-hd" style={{paddingBottom:"1rem", paddingTop:"-1rem"}}>
                                                        <div data-aos="fade-right" className="content-profile" style={{marginBottom:"-1rem"}}>
                                                              <p className="questt" style={{paddingBottom:"-2rem", paddingTop:"1rem", color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Remaining Time to stop <span><CountDown time={TestUnitInfo.time_to_answer} title={TestUnitInfo.moduleTitle} module_id={moduleid} module_name={TestUnitInfo.moduleName} /></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="actions graph-rp graph-rp-dl">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-content-wrapper testedit">
                    <div className="product-sales-area mg-tb-30 graph-container">

                        {slice.map((answerData)=>
                            <div className="container-fluid">
                                <div className="row addQuestions">
                                    <div data-aos="fade-right" data-aos-offset="200" className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                        <div className="product-sales-chart">
                                            <div className="portlet-title">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="caption pro-sl-hd" style={{paddingBottom:"1rem", paddingTop:"-1rem"}}>
                                                            <div data-aos="fade-right" data-aos-offset="200" className="question">
                                                                <div><p className="questt" style={{color: '#4ab2cc', fontStyle: 'bold', fontWeight: '550' }}>{"Question" + " " + questions_answered}<span>/</span> {units.number_of_question}</p></div>
                                                            </div>
                                                            <div data-aos="fade-right" data-aos-offset="200">
                                                                <p className="err1" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>{answerData.question}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="actions graph-rp graph-rp-dl">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-left" data-aos-offset="200" className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                        <div className="white-box analytics-info-cs mg-b-10 res-mg-t-30 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n visits2 visits">
                                            <div style={{marginTop:"1rem"}} className="question">
                                                <div className="select-answer" data-aos="fade-left" data-aos-offset="200"><p style={{color: '#4ab2cc', fontStyle: 'bold', fontWeight: '550' }}>Select the correct Answer/Answers</p></div>
                                            </div>
                                            <div className="answers-form-input" style={{marginTop:"2rem"}}>
                                                <form onSubmit={handleSubmit} id="formReset">
                                                    {answerData.answer.map((answersData)=>
                                                        <div style={{borderRadius:".4rem",paddingRight:"5px", color:"gray"}} className=" mb-3 form-check testedit1">
                                                            <input style={{marginLeft:".1rem", marginTop:"1rem"}} className="form-check-input" type="checkbox" id="flexCheckDefault" name="submittedAnswers" value={answersData} onChange={handleChange} />
                                                            <label htmlFor="flexCheckDefault" style={{marginLeft:"1.2rem", marginTop:".6rem" , marginBottom:"1rem"}} class="form-check-label err2">{answersData}</label>
                                                       </div>
                                                    )}
                                                    <button type="submit" style={{marginTop:"1.5rem", background:'#0b426a', color:'white', width:"100%", borderRadius:".5rem"}} className="btn add-questions">NEXT</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

             <div style={{marginTop:"8rem"}} className="space-creater"></div>
             <Footer destination="/legalnotice"/>
            </main>

        </>
    )
}

export default TestPageContent;