import React, { useEffect, useState } from "react";
import "../admin.css";
import Footer from '../../ClientsDashboard/components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Questions from "../components/Questions";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { API } from '../../config'

function HomepageContent(props) {
    const location = useLocation()
    var TestUnitInfo = location.state
    const testUnit_id = TestUnitInfo.id

    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        axios.get(`${API}/answer/answer/${testUnit_id}`).then(({data})=>{
            setAnswers(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                <div className="testquestions admintest admintest1 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                    <h4><p><Link className="return-home addquestion" style={{textDecoration: 'none'}} to='/units'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="testquestions1" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Questions & Answers</span></p></h4>
                    <Link className="return-home" state={props} style={{textDecoration: 'none'}} to='/addquestion'>
                        <div>
                             <button className="add-buttons add-questions">Add Questions</button>
                        </div>
                    </Link>
                </div>

                <div className="all-content-wrapper admintest">
                    <div className="product-sales-area mg-tb-30 graph-container">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-sales-chart">
                                        <div className="portlet-title">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    {answers.map((answerData)=><Questions key={answerData._id} id={answerData._id} UNIT_IDS={testUnit_id} question={answerData.question} answer={answerData.answer} correctAnswer={answerData.correct_answer}/>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><Footer destination="/adminlegal" /></div>
            </main>

        </>
    )
}

export default HomepageContent;