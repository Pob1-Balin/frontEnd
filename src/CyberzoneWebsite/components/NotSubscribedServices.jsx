import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import axios from 'axios'
import { API } from '../../config'
function NotSubscribedServices(props) {

    const userService = props.user.services
    console.log(userService)
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`${API}/service`).then(({ data }) => {
            setServices(data.data)
        }).catch((err) => {
            //  console.log("Something Went Wrong:", err)
        })
    }, []);
    const [noOfElements, setnoOfElements] = useState(4);
    const loadMore = () => {
        setnoOfElements(noOfElements + noOfElements);
    }
    return (
        <>
            {services.map((item) => {
                if (userService == []) {
                    for (let i = 0; i < userService.length; i++) {
                        if (item._id !== userService[i]) {

                            return <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                <div class="courses-inner mg-t-30">
                                    <div class="courses-title">
                                        <a href="#"><img src="./images/Cature.png" alt="" /></a>
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                                        <p><span></span> <b>{item.description}</b></p>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <Link to='/subscribe' state={{ user: props.user, sId: item._id }}><div class="product-buttons mt-1 mb-2 btn">
                                            Subscribe Now
                                        </div></Link>
                                    </div>
                                </div>
                            </div>
                        }
                    }
                } else {
                    return <div data-aos="zoom-in" data-aos-offset="100" class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                    <div class="courses-inner mg-t-30">
                        <div class="courses-title">
                            <a href="#"><img src="./images/Cature.png" alt="" /></a>
                            <h2>{item.name}</h2>
                        </div>
                        <div class="course-des" style={{ paddingLeft: ".3rem" }}>
                            <p><span></span> <b>{item.description}</b></p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Link to='/subscribe' state={{ user: props.user, sId: item._id }}><div class="product-buttons mt-1 mb-2 btn">
                                Subscribe Now
                            </div></Link>
                        </div>
                    </div>
                </div>
                }
            })}
            <div class="product-buttons mt-5 mb-2" style={{ textAlign: "center" }}>
                <button onClick={() => loadMore()} style={{ textDecoration: 'none', textAlign: "center" }} type="button" class="button-default cart-btn mr-1 mt-1 btn-info"><FaChevronCircleRight style={{ paddingTop: "" }} size='1rem' color='#ffffff' /> View More</button>
            </div>
        </>
    );
}

export default NotSubscribedServices;