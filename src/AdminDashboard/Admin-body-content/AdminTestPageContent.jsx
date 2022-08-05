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
import NumberOfQuestionsAndTime from "../components/NumberOfQuestionsAndTime";
import Marquee from "react-fast-marquee";

function HomepageContent(props) {
    const location = useLocation()
    var TestUnitInfo = location.state
    const testUnit_id = TestUnitInfo.id
    const [answers, setAnswers] = useState([]);
    const [unitTime, setUnitTime] = useState([{}]);
    var time = 0;
    useEffect(() => {
        axios.get(`${API}/answer/answer/${testUnit_id}`).then(({data})=>{
            setAnswers(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })

        axios.get(`${API}/unit/units/${testUnit_id}`).then(({data})=>{
            setUnitTime(data.data)
        }).catch((err)=>{
         //    console.log("Something Went Wrong:", err)
        })

        Aos.init({ duration: 2000 });
    }, []);

    const [values, setValues] = useState({
        number_of_question: '',
        time: ''
    })

    const handleChange = event => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const submitQuestionsTime = (questionInfo) => {
        axios.put(`${API}/unit/unit/${testUnit_id}`, questionInfo)
            .then(res => {
            })
            .catch(err => {
            })
    }
    
    time = time + parseInt(unitTime.time);
    console.log("trjyuyiu",time)

    const handleSubmit = (event) => {
        event.preventDefault();
        const { number_of_question, time } = values;
        submitQuestionsTime({
            number_of_question,
            time
        });
        window.location.reload();
    }

    const hours = Math.floor((unitTime.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((unitTime.time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((unitTime.time % (1000 * 60)) / 1000);

    return (
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                {/*-- Modal =====*/}
                <div class="modal fade" id="setTime" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 style={{color: "gray", fontWeight:"550"}} class="modal-title" id="exampleModalLabel">Set number of questions and time to answer them</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="number" className="form-control input" placeholder="Enter number of questions to answer" name="number_of_question" value={values.number_of_question} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control input" placeholder="Select time interval" name="time" value={values.time} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div style={{marginTop:"-2rem"}} class="modal-footer">
                            <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                            <button type="submit" href="#!" class="btn btn-info" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="testquestions admintest admintest1 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                    <h4><p><Link className="return-home addquestion" style={{textDecoration: 'none'}} to='/units'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="testquestions1" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Questions & Answers</span></p></h4>
                    <div style={{display: "flex"}}>
                        <div>
                            <button style={{width: "5rem", background: "#3363ad"}} className="add-buttons add-questions block" data-toggle="modal" data-target="#setTime">Set time</button>
                        </div>
                        <Link className="return-home" state={{id:testUnit_id}} style={{textDecoration: 'none', marginLeft:".3rem"}} to='/addquestion'>
                            <div>
                                <button className="add-buttons add-questions">Add Questions</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <Marquee speed="100" style={{height: "2rem"}}>
                    {unitTime.number_of_question != ""?
                        <NumberOfQuestionsAndTime key={unitTime._id} id={unitTime._id} number={unitTime.number_of_question} timeOrNumber="timeOrNumber" time={hours + "h " + minutes + "m " + seconds + "s"}/>
                        :
                        <NumberOfQuestionsAndTime key={unitTime._id} id={unitTime._id} number={unitTime.number_of_question} timeOrNumber="empty" time={hours + "h " + minutes + "m " + seconds + "s"}/>
                    }
                </Marquee>

                <div className="all-content-wrapper admintest">
                    <div className="product-sales-area mg-tb-30 graph-container">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-sales-chart">
                                        <div className="portlet-title">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    {answers.map((answerData) => <Questions key={answerData._id} questionId={answerData._id} id={answerData._id} question={answerData.question} answer={answerData.answer} testUnit_id={testUnit_id} correctAnswer={answerData.correct_answer}/>)}
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