import React, { useEffect } from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import { useLocation } from 'react-router-dom';
import "../admin.css";
import { Link } from 'react-router-dom';
import EditQuestions from "../components/EditQuestions";

function EditQuestionContent() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const location = useLocation()
    var questionInfo = location.state
    const correctAnswerArray = questionInfo.correctAnswerArray;
    const anwersArray = questionInfo.anwersArray;
    const question = questionInfo.question;
    const testUnit_id = questionInfo.testUnit_id;
    const states = questionInfo.states;
    const id = questionInfo.id;
    return (
        <>
            <main className="px-md-4 wrapper2">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom" style={{marginTop:"8rem"}}>
                    <h4 style={{color: '#0d3360'}}>
                        <div className="returnHome2">
                            <h4><p><Link className="return-home" style={{ textDecoration: 'none', margin:"0rem"}} to='/admintest' state={{id: states.id, moduleId: states.moduleId, moduleName: states.moduleName, moduleTitle: states.moduleTitle}}><span className="home">Accueil</span></Link> <span className="stroke_color">/</span> <span className="testt" style={{fontStyle: 'bold', fontWeight: '550' }}>Questions et Réponses</span></p></h4>
                        </div>
                    </h4>
                </div>

                <div className="product-status mg-b-15 clients-product-status">
                    <div className="question-container question-container2">
                        <div className="container-fluid">
                             <EditQuestions id={id} anwersArray={anwersArray} correctAnswerArray={correctAnswerArray} question={question} testUnit_id={testUnit_id} />
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"17.5rem"}} className="space-creater"></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default EditQuestionContent;