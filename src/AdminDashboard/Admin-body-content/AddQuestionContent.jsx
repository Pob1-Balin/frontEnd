import React from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import AddQuestions, { Navigate } from '../components/AddQuestions';
import { useLocation } from 'react-router-dom';
import "../admin.css";
import { Link } from 'react-router-dom';

function AddQuestionContent() {
    const location = useLocation()
    var AddUnitInfo = location.state
    const addUnitId = AddUnitInfo.id
    return (
        <>
            <main className="px-md-4 wrapper2">

                <div className="test-margin d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                     <h4><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/admintest'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="testt" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Question</span></p></h4>
                </div>

                <div className="all-content-wrapper">
                    <div className="product-sales-area mg-tb-30 graph-container">
                        <div className="container-fluid">
                             <AddQuestions units_id={addUnitId} />
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"17.5rem"}} className="space-creater"></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default AddQuestionContent;