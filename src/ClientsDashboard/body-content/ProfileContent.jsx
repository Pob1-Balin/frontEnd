import React, { useEffect } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { Form, Row, Col} from "react-bootstrap";
import Footer from '../components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';

function ProfileContent (){
    const service = JSON.parse(localStorage.getItem("servId"))
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return(
        <>
            <main>
                <div className="ms-sm-auto px-md-4 ml-3 mr-1">
                    <div className="border-bottom headerTitle">
                        <h1><p>Page de profil</p></h1>
                    </div>
                    <div className="Home_navigation">
                            <p><Link className="return-home" style={{textDecoration: 'none', marginLeft:"0rem", paddingLeft:"0rem" }} to='/clientservicedashboard' state={{ service_id: service._id, modules: service.modules}}><span className="home">Accueil /</span></Link> <span style={{color: '#0d3360'}}>Mon profil</span></p>
                    </div>

                    <div className="profile_wrapper">
                        <div className="card profile_card" style={{padding: "3rem"}}>
                            <div style={{display: "flex", justifyContent: "space-between", marginTop: "-1rem"}}>
                                <h5 className="profile_title">Mon information</h5>
                                <div><button className="profile_delete_btn" style={{outline:"none"}}><DeleteIcon style={{fontSize:"1.2rem", marginTop:"-.3rem"}}/>Delete my account</button></div>
                            </div>
                            <Form className="form" style={{marginTop: "-1rem"}}>
                                <Row className="mb-3">
                                    <Col md={6} lg={4} style={{marginTop:"-1rem"}}>
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label className="form_lable">Nom </Form.Label>
                                            <Form.Control className="form_input" placeholder="" disabled readOnly/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={4} style={{marginTop:"-1rem"}}>
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label className="form_lable">Prénom</Form.Label>
                                            <Form.Control className="form_input" placeholder=""  disabled readOnly/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={4} style={{marginTop:"-1rem"}}>
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label className="form_lable">Adresses e-mail </Form.Label>
                                            <Form.Control className="form_input" placeholder="kongbizion3@gmail.com" disabled readOnly/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>



                        <div className="card profile_card" style={{padding: "3rem", marginTop: "-3rem"}}>
                        <div style={{marginTop: "-1rem", marginBottom: "3.2rem"}}>
                            <h5 className="profile_title">Changer le mot de passe</h5>
                        </div>
                        <Form className="form" style={{marginTop: "-2rem"}}>
                            <Row className="mb-3">
                                <Col md={6} lg={4} style={{marginTop:"-1rem"}}>
                                    <Form.Group controlId="formGridCity">
                                            <Form.Label className="form_lable">Ancien mot de passe</Form.Label>
                                            <Form.Control className="form_input" placeholder=""/>
                                    </Form.Group>
                                </Col>
                                <Col md={6} lg={4} style={{marginTop:"-1rem"}}>
                                    <Form.Group controlId="formGridCity">
                                            <Form.Label className="form_lable">Nouveau mot de passe</Form.Label>
                                            <Form.Control className="form_input" placeholder=""/>
                                    </Form.Group>
                                </Col>
                                <Col md={6} lg={4} className="profile_validate" style={{marginTop:"-1rem"}}>
                                    <Form.Group controlId="formGridCity">
                                            <Form.Label className="form_lable">Confirmez le mot de passe</Form.Label>
                                            <Form.Control className="form_input" />
                                    </Form.Group>
                                    <div style={{paddingBottom: "-10rem", marginTop: "1.5rem"}}><button className="profile_validate_btn" style={{outline:"none"}}>Changer</button></div>
                                </Col>
                            </Row>
                        </Form>
                        </div>
                    </div>
                    <Footer destination="/legalnotice" />
                </div>
            </main>
        </>
    )
}

export default ProfileContent;