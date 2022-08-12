import React, { useState, useEffect } from "react";
import momo from "../images/momo.png"
import orange from "../images/orangemomo.jpeg"
import "../../AdminDashboard/admin.css";
import axios from 'axios'
import { API } from "../../config";
import {Link, useLocation, useNavigate} from "react-router-dom"

function SubscribeForService(props) {
    const location = useLocation();
    const user = location.state.user;

    const stateInfo = location.state;
    const serviceId = stateInfo.id;
    const subscribeService = stateInfo.service_info;
    const amount = stateInfo.amount;
    const payable = (parseInt((2/100) * amount)) + parseInt(amount);

    const userData = stateInfo.userData;
    const userServices = userData.services;

    // const userId = userData._id;
    const userId = "62f47d3b149cacf97e1a9a70";

    const [userServs, setUserServs] = useState([]);
    console.log("user services:", userServs);
    const [modules, setModules] = useState([]);
    useEffect(() => {
        axios.get(`${API}/serv/getserv/${userId}`).then(({ data }) => {
           setUserServs(data.data)
        }).catch((err) => {
            //  console.log("Something Went Wrong:", err)
        });

        axios.get(`${API}/module/servModule/${serviceId}`).then(({data})=>{
            setModules(data.data)
          //  console.log(data.data)
        }).catch((err)=>{
          //  console.log("Something Went Wrong:", err)
        })
    }, []);



//Getting units for each module and asigning it to the units field of the module
     {modules.map((item) => {
         axios.get(`${API}/unit/unit/${item._id}`).then(({data})=>{
            item.units = data.data;
            item.module_score = "20";
         }).catch((err)=>{
        })
    })}

    var another_object = [{}];
    {userServs.map((item) => {
        another_object = item;
   })}


    subscribeService.score = "20";
    subscribeService.modules = modules;

    console.log("user services:", userServs);
    // console.log("subscribe services:", serviceId);

    const [inputs, setInputs] = useState({
        country_code: "",
        phone_number: "",
        amount: payable,
    });

    const handleChange = event => {
        setInputs({
            ...inputs, [event.target.name]: event.target.value
        })
    }

    const submitUserInfo = (userSubscribeInfo) => {
        const { country_code, phone_number, amount } = inputs;
        const complete_phone_number = country_code + phone_number;

        // MOMO API HERE

        axios.put(`http://localhost:7000/api/v1/serv/update/${userId}`, userSubscribeInfo)
            .then(res => {
            })
            .catch(err => {
            })

            console.log("lets see", userSubscribeInfo.services);


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById("disable_btn").disabled = "true";

        const services = [...userServs, subscribeService]
        submitUserInfo({
            services,
        });
    }

    return (
        <>
            <div className="py-90 text-center payment-header" style={{height:"13rem", backgroundColor:"#4ab2cc", boxShadow:"0px 0px 5px 0px gray"}}>
                <h4><p className="text-white">Select payment method</p></h4>
            </div>


               {/*-- Modal =====*/}
                <div className="modal fade" id="mtn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div style={{marginTop:"-2rem"}} className="modal-body">
                                <div className="courses-inner mg-t-30">
                                    <div className="courses-title">
                                        <a href="#"><img style={{imageSize:"cover"}} src={momo} alt="" /></a>
                                    </div>
                                    <form onSubmit={handleSubmit} style={{marginTop:"2rem"}}>
                                        <div className="form-group">
                                            <select style={{color:"gray", borderColor:"F5F5F5"}} name="country_code" className="form-select" aria-label="Default select input" value={inputs.country_code} onChange={handleChange} >
                                                <option selected>Select country code</option>
                                                <option value="+237" selected>Cameroon (+237)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input style={{height:"2.3rem"}} type="number" className="form-control input" placeholder="Enter your phone number" name="phone_number" value={inputs.phone_number} onChange={handleChange}/>
                                        </div>
                                        <div style={{color:"gray", fontSize:"1rem", marginTop:"1.8rem"}}><b><p>Total: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3}).format(payable)}XAF</p></b></div>

                                        <div className="modal-footer" style={{borderTop:"1px solid #F5F5F5", marginTop:"1rem", marginBottom:"-2rem"}}>
                                            <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                            <button type="submit" id="disable_btn" className="btn btn-info">Pay Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


               {/*-- Modal =====*/}
                <div className="modal fade" id="orange" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div style={{marginTop:"-2rem"}} className="modal-body">
                                <div className="courses-inner mg-t-30">
                                    <div className="courses-title">
                                        <a href="#"><img style={{imageSize:"cover"}} src={orange} alt="" /></a>
                                    </div>
                                    <form onSubmit={handleSubmit} style={{marginTop:"2rem"}}>
                                        <div className="form-group">
                                            <select style={{color:"gray", borderColor:"F5F5F5"}} name="country_code" className="form-select" aria-label="Default select input" value={inputs.country_code} onChange={handleChange} >
                                                <option selected>Select country code</option>
                                                <option value="+237" selected>Cameroon (+237)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input style={{height:"2.3rem"}} type="number" className="form-control input" placeholder="Enter your phone number" name="phone_number" value={inputs.phone_number} onChange={handleChange}/>
                                        </div>
                                        <div style={{color:"gray", fontSize:"1rem", marginTop:"1.8rem"}}><b><p>Total: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3}).format(payable)}XAF</p></b></div>

                                        <div className="modal-footer" style={{borderTop:"1px solid #F5F5F5", marginTop:"1rem", marginBottom:"-2rem"}}>
                                            <button type="button" className="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-info">Pay Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 payment-cards" style={{marginTop:"3rem"}}>
                    <div class="services-area">
                        <div class="container-fluid services">
                            <div class="row mg-b-15">

                                <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                                    <div class="courses-inner mg-t-30">
                                        <div class="courses-title">
                                            <a href="#"><img style={{imageSize:"cover"}} src={momo} alt="" /></a>
                                        </div>

                                        <table className="table text-center table-bordered" style={{color:"gray"}}>
                                            <tr>
                                                <td>MTN Momo</td>
                                            </tr>
                                            <tr>
                                                <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3}).format(amount)}XAF</td>
                                            </tr>
                                            <tr>
                                                <td>Charge: 0XAF - 2%</td>
                                            </tr>
                                            <tr>
                                                <td>Payable: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3}).format(payable)}XAF</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button data-toggle="modal" data-target="#mtn" className="make-payment" style={{color:"white", backgroundColor:"#4ab2cc", borderRadius:".2rem", border:"none", fontWeight:"550", width:"9em"}}>Make payment</button>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>

                                <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                                    <div class="courses-inner mg-t-30">
                                        <div class="courses-title">
                                            <a href="#"><img src={orange} alt="" /></a>
                                        </div>

                                        <table className="table text-center table-bordered" style={{color:"gray"}}>
                                            <tr>
                                                <td>ORANGE MO</td>
                                            </tr>
                                            <tr>
                                                <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3}).format(amount)}XAF</td>
                                            </tr>
                                            <tr>
                                                <td>Charge: 0XAF - 2%</td>
                                            </tr>
                                            <tr>
                                                <td>Payable: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3}).format(payable)}XAF</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button data-toggle="modal" data-target="#orange" className="make-payment" style={{color:"white", backgroundColor:"#4ab2cc", borderRadius:".2rem", border:"none", fontWeight:"550", width:"9em"}}>Make payment</button>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <div style={{marginTop:"100000rem"}}></div>

        </>
    )
}

export default SubscribeForService;