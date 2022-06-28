import React from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import AddQuestions from '../components/AddQuestions';
import "../admin.css";
import { Link } from 'react-router-dom';


function AddQuestionContent() {

    return (
        <>
            <main className="px-md-4 wrapper2">

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
                     <h4 style={{ marginTop: '2rem' }}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/admintest'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Question</span></p></h4>
                </div>

                <div className="all-content-wrapper">
                    <div className="product-sales-area mg-tb-30 graph-container">
                        <div className="container-fluid">
                            <div className="row addQuestions">
                                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-sales-chart">
                                        <div className="portlet-title">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="caption pro-sl-hd" style={{paddingBottom:"1rem", paddingTop:"-1rem"}}>
                                                         <span style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550'}} className="caption-subject">Enter Question</span>
                                                         <div style={{marginTop:".8rem" }}>
                                                             <textarea width="100%" className="form-control"></textarea>
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

                                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                    <div className="white-box analytics-info-cs mg-b-10 res-mg-t-30 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n visits2 visits">
                                        <AddQuestions/>
                                        <div style={{ marginTop:"1.5rem"}}>
                                            <button type="submit" style={{fontWeight:"550", height:'2.5rem', background:'#0b426a', color:'white', width:"100%", borderRadius:".4rem"}} className="btn">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default AddQuestionContent;