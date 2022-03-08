import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { Form, Row, Col} from "react-bootstrap";
import { FaLine } from "react-icons/fa";

function ProfileContent (){
    return(
        <>
            <main className="ms-sm-auto px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Profile page</h1>
                    
                </div>

                <div className="profile_navigation">
                     <p><Link style={{textDecoration: 'none'}} to='/'><span style={{color: "#f2a654"}} className="home">Home</span></Link> <span style={{color: "#f2a654"}}>/</span> <span>My Profile</span></p>
                </div>


                <div className="profile_wrapper">

                    <div className="card profile_card" style={{padding: "3rem"}}>

                       <div style={{display: "flex", justifyContent: "space-between", marginTop: "-1rem"}}>
                             <h5 style={{marginLeft: "-1.2rem", color: "#36474f"}}><b>My information</b></h5>
                             <div><button className="profile_delete_btn"><FaLine size='1.3rem' style={{marginBottom: '.1rem'}} />Delete my account</button></div>
                       </div>

                        <Form className="form" >
                                <Row className="mb-3">
                                    <Col md={6} lg={4}>
                                            <Form.Group controlId="formGridCity">
                                                <Form.Label className="form_lable">First name</Form.Label>
                                                <Form.Control placeholder="" disabled readOnly/>
                                            </Form.Group>
                                    </Col>

                                    <Col md={6} lg={4}>
                                            <Form.Group controlId="formGridCity">
                                                <Form.Label className="form_lable">Name</Form.Label>
                                                <Form.Control placeholder=""  disabled readOnly/>
                                            </Form.Group>
                                    </Col>

                                    <Col md={6} lg={4}>
                                            <Form.Group controlId="formGridCity">
                                                <Form.Label className="form_lable">E-mail</Form.Label>
                                                <Form.Control className="form_lable" placeholder="kongbizion3@gmail.com" disabled readOnly/>
                                            </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                    </div>

                    <div className="card profile_card" style={{padding: "3rem", marginTop: "-3rem"}}>

                       <div style={{marginLeft: "-1.2rem", marginTop: "-1rem", marginBottom: "3.2rem"}}>
                             <h5 style={{color: "#36474f"}}><b>Change password</b></h5>
                       </div>

                        <Form className="form" style={{marginTop: "-1rem"}}>
                                <Row className="mb-3">
                                    <Col md={6} lg={4}>
                                            <Form.Group controlId="formGridCity">
                                                <Form.Label className="form_lable">Old Password</Form.Label>
                                                <Form.Control placeholder=""/>
                                            </Form.Group>
                                    </Col>

                                    <Col md={6} lg={4}>
                                            <Form.Group controlId="formGridCity">
                                                <Form.Label className="form_lable">New Password</Form.Label>
                                                <Form.Control placeholder=""/>
                                            </Form.Group>
                                              
                                              <div style={{marginLeft: "1rem", marginTop: "1rem"}}>
                                                    <Row style={{marginBottom: "-1.2rem"}}>
                                                            <Col className="form_validation_text"><p style={{lineHeight: "1.3rem"}}><span style={{fontSize: "2rem"}}>.</span> A capital letter</p></Col>
                                                            <Col className="form_validation_text"><p style={{lineHeight: "1.3rem"}}><span style={{fontSize: "2rem"}}>.</span> A special character</p></Col>
                                                    </Row>
                                                    <Row style={{marginBottom: "-1.2rem"}}>
                                                            <Col className="form_validation_text"><p style={{lineHeight: "1.3rem"}}><span style={{fontSize: "2rem"}}>.</span> A tiny</p></Col>
                                                            <Col className="form_validation_text"><p style={{lineHeight: "1.3rem"}}><span style={{fontSize: "2rem"}}>.</span> Minimum 12 characters</p></Col>
                                                    </Row>
                                                    <Row>
                                                            <Col className="form_validation_text"><p style={{lineHeight: "1.3rem"}}><span style={{fontSize: "2rem"}}>.</span> A number</p></Col>
                                                    </Row>
                                              </div>
                                    </Col>

                                    <Col md={6} lg={4} className="profile_validate">
                                            <Form.Group controlId="formGridCity">
                                                <Form.Label className="form_lable">To confirm</Form.Label>
                                                <Form.Control className="form_lable"/>
                                            </Form.Group>
                                            <div style={{paddingBottom: "-10rem", marginTop: "1.5rem"}}><button className="profile_validate_btn">To validate</button></div>
                                    </Col>
                                </Row>
                            </Form>
                    </div>

                </div>

                <div className="footer" style={{backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", height: "3.4rem", marginLeft: "-2rem", marginRight: "-2rem", padding: "2rem", paddingTop: "1.1rem"}}>
                     <p style={{color: "#808181"}}><b>&copy; 2022 Cyberzone</b></p>
                     <p style={{color: "#4b86c6"}}><b>Mentions legales</b></p> 
                </div>

            </main>
        </>
    )
}

export default ProfileContent;