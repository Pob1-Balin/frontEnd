import { Form } from "formik";
import React from "react";
import "../admin.css";
import {useLocation} from 'react-router-dom';
function SignUpContent(){
    return(
        <>
             <main className="">

             <div class="all-content-wrapper LoginCard">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="product-sales-chart login-card-border">
                                         <div class="portlet-title">
                                             <p class="text-center Login-name">SIGN UP</p>
                                         </div>

                                         <div class="row inner-card-container">
                                             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="review-content-section">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="devit-card-custom">
                                                                <div class="form-group">
                                                                    <div style={{marginBottom: "-12px"}} class="FormLable"><p>Username</p></div>
                                                                    <input style={{height:'2.5rem'}} type="text" class="form-control" placeholder="Enter module name"/>
                                                                </div>
                                                                <div class="form-group" style={{marginTop: '13px'}}>
                                                                    <div style={{marginBottom: "-12px"}} class="FormLable"><p>Password</p></div>
                                                                    <input style={{height:'2.5rem'}} type="number" class="form-control" placeholder="Enter your password"/>
                                                                </div>

                                                                <div style={{marginTop: '1.3rem'}} class="form-group">
                                                                    <a style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}} href="#!" class="btn waves-effect waves-light submitBtn">SIGN UP</a>
                                                                </div>

                                                                <div class="row" style={{marginTop:"-.5rem"}}>
                                                                     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                         <div><hr style={{height:".4px", marginTop:"35px"}}/></div>
                                                                     </div>
                                                                     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                         <div style={{textAlign:"center", marginTop:'-3rem'}}><button className="Orbutton">OR</button></div>
                                                                     </div>
                                                                </div>

                                                                <div class="row text-center mt-2 mb-4" style={{marginTop:"-.5rem"}}>
                                                                     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                         <p style={{fontSize:".9rem"}}>Already have an Account? <span><a href="#">Login</a></span></p>
                                                                     </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                         </div>
                                         
                                    </div>
                                </div>


                            </div>
                        </div>
                     </div>

            
           
             </main>

        </>
    )
}

export default SignUpContent;