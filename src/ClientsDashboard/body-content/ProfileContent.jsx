import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { Form, Row, Col} from "react-bootstrap";
import Footer from '../components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';

function ProfileContent (){
    return(
        <>
            <div className="ms-sm-auto px-md-4 ml-3">
                <div className="top-margin d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h1 className="heading" style={{color: '#0d3360'}}>Profile page</h1>
                </div>
                <div className="Home_navigation">
                     <p><Link className="return-home" style={{textDecoration: 'none'}} to='/clientservicedashboard'><span className="home">Home /</span></Link> <span style={{color: '#0d3360'}}>My Profile</span></p>
                </div>
                <div className="profile_wrapper">
                    <div className="card profile_card" style={{padding: "3rem"}}>
                        <div style={{display: "flex", justifyContent: "space-between", marginTop: "-1rem"}}>
                             <h5 className="profile_title profile_title_responsive" style={{marginLeft: "-1.2rem", color: '#0d3360'}}><b>My information</b></h5>
                             <div><button className="profile_delete_btn"><DeleteIcon  />Delete my account</button></div>
                        </div>
                        <Form className="form" >
                            <Row className="mb-3">
                                <Col md={6} lg={4}>
                                    <Form.Group controlId="formGridCity">
                                         <Form.Label className="form_lable">First Name</Form.Label>
                                         <Form.Control className="form_input" placeholder="" disabled readOnly/>
                                    </Form.Group>
                                </Col>
                                <Col md={6} lg={4}>
                                    <Form.Group controlId="formGridCity">
                                         <Form.Label className="form_lable">Last Name</Form.Label>
                                         <Form.Control className="form_input" placeholder=""  disabled readOnly/>
                                    </Form.Group>
                                </Col>
                                <Col md={6} lg={4}>
                                    <Form.Group controlId="formGridCity">
                                         <Form.Label className="form_lable">E-mail</Form.Label>
                                         <Form.Control className="form_input" placeholder="kongbizion3@gmail.com" disabled readOnly/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="card profile_card" style={{padding: "3rem", marginTop: "-3rem"}}>
                    <div style={{marginLeft: "-1.2rem", marginTop: "-1rem", marginBottom: "3.2rem"}}>
                         <h5 className="profile_title" ><b>Change password</b></h5>
                    </div>
                    <Form className="form" style={{marginTop: "-1rem"}}>
                        <Row className="mb-3">
                            <Col md={6} lg={4}>
                                <Form.Group controlId="formGridCity">
                                     <Form.Label className="form_lable">Old Password</Form.Label>
                                     <Form.Control className="form_input" placeholder=""/>
                                </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                                <Form.Group controlId="formGridCity">
                                     <Form.Label className="form_lable">New Password</Form.Label>
                                     <Form.Control className="form_input" placeholder=""/>
                                </Form.Group>
                            </Col>
                            <Col md={6} lg={4} className="profile_validate">
                                <Form.Group controlId="formGridCity">
                                     <Form.Label className="form_lable">To confirm</Form.Label>
                                     <Form.Control className="form_input" />
                                </Form.Group>
                                <div style={{paddingBottom: "-10rem", marginTop: "1.5rem"}}><button className="profile_validate_btn">To validate</button></div>
                            </Col>
                        </Row>
                    </Form>
                    </div>
                </div>
                <Footer destination="/legalnotice" />
            </div>
        </>
    )
}

export default ProfileContent;