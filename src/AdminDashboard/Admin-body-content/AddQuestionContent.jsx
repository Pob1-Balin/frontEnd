import React, { useEffect } from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import AddQuestions, { Navigate } from '../components/AddQuestions';
import { useLocation } from 'react-router-dom';
import "../admin.css";
import { Link } from 'react-router-dom';

function AddQuestionContent() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const location = useLocation()
    var AddUnitInfo = location.state
    const addUnitId = AddUnitInfo.id
    const states = AddUnitInfo.states
    return (
        <>
            <main className="px-md-4 wrapper2" style={{marginBottom:"0rem"}}>
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
                             <AddQuestions units_id={addUnitId} />
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"11rem"}}></div>
                <Footer destination="admin" />
            </main>
        </>
    )
}

export default AddQuestionContent;