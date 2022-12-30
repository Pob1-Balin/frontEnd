import React, { useEffect, useState } from "react";
import "../admin.css";
import Footer from '../../ClientsDashboard/components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Questions from "../components/Questions";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import axios from "axios";
import NumberOfQuestionsAndTime from "../components/NumberOfQuestionsAndTime";
import Marquee from "react-fast-marquee";
import Modal from 'react-bootstrap/Modal';
import EmptyPageContent from "../../CommonPageContents/EmptyPageContent";
import { API } from "../../config";

function HomepageContent(props) {
    const navigate = useNavigate();
    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem('redirectunit', false);
    });
    const location = useLocation()
    var TestUnitInfo = location.state
    const testUnit_id = TestUnitInfo.id

    const [lgShow, setLgShow] = useState(false); 
    const [refresh, setRefresh] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [unitTime, setUnitTime] = useState([{}]);
    useEffect(() => {
        window.scrollTo(0, 0);
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
    }, [refresh]);

    const [values, setValues] = useState({
        number_of_question: "",
        time: "",
        questions_time: "true"
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const { number_of_question, time, questions_time } = values;
        submitQuestionsTime({
            number_of_question,
            time,
            questions_time
        });
        window.location.reload();
    }

    const hours = Math.floor((unitTime.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((unitTime.time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((unitTime.time % (1000 * 60)) / 1000);

const zion = 20;

  const moveTo = () => {
    localStorage.setItem('redirectaddserv', true);
    navigate("/addquestion", {state:{id:testUnit_id, states: TestUnitInfo}});
  }

    return (
        <>
            <main className="px-md-4 wrapper2">
                <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
                    <Modal.Header>
                        <h5 className="modal-title" id="exampleModalLabel">Définir le nombre de questions et le temps pour y répondre</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} style={{margin:"1rem"}}>
                            <div className="form-group">
                                <label htmlFor='title' style={{ marginBottom: "-9px" }} className="FormLable"><p>Nombre de questions</p></label>
                                <input type='number' style={{color:"#4ab2cc"}} className="form-control input" name="number_of_question" placeholder="Entrez le nombre de questions auxquelles répondre" value={values.number_of_question} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='title' style={{ marginBottom: "-9px" }} className="FormLable"><p>Heure des questions</p></label>
                                <select style={{fontSize:".9rem", boxShadow:"none"}} name="time" className="form-select input" aria-label="Default select input" value={values.time} onChange={handleChange} required>
                                    <option>Sélectionnez l'intervalle de temps</option>
                                    <option value="1800000" selected>30 minutes</option>
                                    <option value="2700000" selected>45 minutes</option>
                                    <option value="3600000" selected>1 heure</option>
                                    <option value="4500000" selected>1 heure 15 minutes</option>
                                    <option value="5400000" selected>1 heure 30 minutes</option>
                                    <option value="6300000" selected>1 heure 45 minutes</option>
                                    <option value="7200000" selected>2 heures</option>
                                </select>
                            </div>
                            <Modal.Footer>
                                <div style={{margin:"-1rem"}} className='modal-footer'>
                                    <button type="button" class="btn btn-danger mr-1" onClick={() => setLgShow(false)} >Fermé</button>
                                    <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}}>Envoyer</button>
                                </div>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>
                </Modal>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom resource-page">
                    <h4 style={{marginTop:'2rem', color: '#0d3360'}}>
                        <div className="returnHome2">
                           <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem"}} to='/units' state={{ id:TestUnitInfo.moduleId, title: TestUnitInfo.moduleTitle, module_name: TestUnitInfo.moduleName }}><span className="home">Accueil</span></Link> <span>/</span> <span style={{fontStyle: 'bold'}}>Questions et Réponses</span></p>
                        </div>
                    </h4>
                    <div style={{display: "flex"}} className='returnHome'>
                        <div>
                            <button style={{width: "9rem", background: "#3363ad", outline:"none"}} className="add-buttons add-questions" onClick={() => setLgShow(true)} >Régler le temps</button>
                        </div>
                        <a onClick={moveTo} href="#" style={{textDecoration: 'none', marginLeft:".3rem"}}>
                            <div>
                                <button style={{width: "12rem", outline:"none"}} className="add-buttons add-questions">Ajouter des questions</button>
                            </div>
                        </a>
                    </div>
                </div>
                <Marquee speed="100" style={{height: "4rem", overflow:"hidden"}}>
                    {unitTime.questions_time == "false" ?
                        <h4><p><span className="testquestions1 marquee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550', marginTop:"2rem", marginLeft:"1rem"}}>Définissez le nombre de questions auxquelles il faut répondre pour cette unité et le temps respectif</span></p></h4>
                        :
                        <NumberOfQuestionsAndTime key={unitTime._id} id={unitTime._id} number={unitTime.number_of_question} time={hours + "h " + minutes + "m " + seconds + "s"}/>
                    }
                </Marquee>

                {answers.length == 0?
                    <EmptyPageContent text="Oops!!! aucune question n'a été ajoutée pour cette unité" directives="Cliquez sur le bouton Ajouter une question ci-dessus pour ajouter des questions."/>
                    :
                    <div className="product-status mg-b-15 clients-product-status">
                        <div className="mt-3 question-container">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="product-sales-chart" style={{paddingBottom:"0rem"}}>
                                            <div className="portlet-title">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingTop:"1.5rem"}}>
                                                        {answers.map((answerData, index) => <Questions key={answerData._id} questionId={answerData._id} id={answerData._id} question={answerData.question} index={index+1} answer={answerData.answer} testUnit_id={testUnit_id} correctAnswer={answerData.correct_answer} states={TestUnitInfo} refresh={refresh} setRefresh={setRefresh}/>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div style={{marginTop:"9rem"}}><Footer destination="/adminlegal" /></div>
            </main>

        </>
    )
}

export default HomepageContent;