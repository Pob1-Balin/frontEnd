import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import axios from 'axios'
import { API } from '../../config'
function NotSubscribedServices(props) {

    const servicesData = props.services;
    const userData = props.userData;

    const [noOfElements, setnoOfElements] = useState(4);
    const slice = servicesData.slice(0, noOfElements);
    const loadMore = () => {
        setnoOfElements(noOfElements + noOfElements);
    }
    return (
        <>
            {slice.map((item, index) => <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                <div class="courses-inner mg-t-30">
                    <div class="courses-title">
                        <a href="#"><img src="./images/Cature.png" alt="" /></a>
                        <h2>{item.name}</h2>
                    </div>
                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                        <p><span></span> <b>{item.description}</b></p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Link to='/subscribe' state={{id:item._id, service_info:servicesData[index], amount:item.amount, userData:userData}}><div class="product-buttons mt-1 mb-2 btn">
                            Subscribe Now
                        </div></Link>
                    </div>
                </div>
            </div>)}

            <div class="product-buttons mt-5 mb-2" style={{ textAlign: "center" }}>
                <button onClick={() => loadMore()} style={{ textDecoration: 'none', textAlign: "center" }} type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{ paddingTop: "" }} size='1rem' color='#ffffff' />View More</button>
            </div>
        </>
    );
}

export default NotSubscribedServices;