import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import axios from 'axios'
import { API } from '../../config'
function ClientService(props) {
    const userServices = props.services;


    // const comServ = props.user.services  //['62beae1368a6026244db706a','62c56e866122d005004fa3a8'];
    // console.log('test', comServ)
    // let serv = comServ[0]
    // for (var i = 1; i <= comServ.length - 1; i++) {
    //     serv = serv + '-' + comServ[i]
    // }

    // console.log(serv)
    // // const [services1, setServices1] = useState([])
    // useEffect(() => {
    //     axios.get(`${API}/service/user/${serv}`).then(({ data }) => {
    //         setServices(data.data)
    //     }).catch((err) => {
    //         //  console.log("Something Went Wrong:", err)
    //     })
    // }, []);


    // console.log('servic', services)

    const [noOfElements, setnoOfElements] = useState(4);
    const slice = userServices.slice(0, noOfElements);
    const loadMore = () => {
        setnoOfElements(noOfElements + noOfElements);
    }

    return (userServices.length == 0 ? <h1 className='text-center'>Oooopps!!! no subscribed service</h1> :
        <>
            {userServices.map((item) => {
                return <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                    <div class="courses-inner mg-t-30">
                        <div class="courses-title">
                            <a href="#"><img src={item.image} alt="" /></a>
                            <h2 style={{ color: "gray" }}>{item.name}</h2>
                        </div>
                        <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                            <p style={{ color: "gray" }}><span></span> <b>{item.description}</b></p>
                        </div>

                        <Link to="/clientservicedashboard" style={{ textDecoration: "none" }} state={{ id: item._id }}>
                            <div className='module_units_button' style={{ marginTop: "1rem", marginBottom: '-1.3rem' }}>
                                <FaChevronCircleRight size='1rem' style={{ marginTop: '4.5px' }} />
                                <p style={{ paddingLeft: ".2rem", paddingTop: ".1rem", fontSize: '1rem' }}>Visit</p>
                            </div>
                        </Link>
                    </div>
                </div>
            })}
            <div class="product-buttons mt-5 mb-2" style={{ textAlign: "center" }}>
                <button onClick={() => loadMore()} style={{ textDecoration: 'none', textAlign: "center" }} type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{ paddingTop: "" }} size='1rem' color='#ffffff' /> View More</button>
            </div>
        </>
    );
}

export default ClientService;