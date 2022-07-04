import React, { useEffect, useState} from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import "../admin.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config'

function AddModuleContent() {

    const [module, setModule] = useState([]);
    useEffect(() => {
        axios.get(`${API}/module/module`).then(({data})=>{
            setModule(data.data)
            // console.log(data.data)
        }).catch((err)=>{
           //  console.log("Something Went Wrong:", err)
        })
        // Aos.init({ duration: 2000 });
    }, []);

    const navigate = useNavigate();
    var module_length = module.length + 1;
    var new_module_length = "Module" + " " + module_length ;
    const [values, setValues] = useState({
       name: new_module_length,
       title: '',
       image: '',
       time_spent: '',
       score:"",
    })

    // Destructing so as to be able to send to the backend
    const handleChange = event => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const submitModule = (moduleInfo) => {
        axios.post(`${API}/module/module`, moduleInfo)
            .then(res => {
                // alert(res)
                // if (res.status === 200)
                // alert('service successfully added')
                // else
                // Promise.reject()
            // alert("course Added Successfully")
            })
            .catch(err => {
                //  alert('Something went wrong, course could not be added')
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, title, image, time_spent, score } = values;
        submitModule({
            name,
            title,
            image,
            time_spent,
            score,
        });
        navigate('/adminmodulepage');
    }


    return (
        <>
            <main className="px-md-4 wrapper2">
                <div className="add-module d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h4><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/adminmodulepage'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span className="add-modulee" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Modules</span></p></h4>
                </div>

                <div className="single-pro-review-area mt-t-30 mg-b-15 mt-25 add-module-forms">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-payment-inner-st">
                                    <div><p className="mt-3 mb-4" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Add Module</p></div>
                                    <div id="myTabContent" class="tab-content custom-product-edit">
                                        <div class="product-tab-list">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="review-content-section">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="devit-card-custom">
                                                                     <form onSubmit={handleSubmit}>
                                                                        {/* <input type="hiden" className="form-control" placeholder="Enter module name" name="name" value={number_of_modules} onChange={handleChange} /> */}
                                                                        <div className="form-group">
                                                                            <label htmlFor='title' style={{marginBottom: "-12px"}} className="FormLable"><p>Title</p></label>
                                                                            <input type="text" className="form-control input" placeholder="Enter module title" name="title" value={values.title} onChange={handleChange} />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor='image' style={{marginBottom: "-12px"}} className="FormLable"><p>Image</p></label>
                                                                            <input type="file" className="form-control" onchange="document.getElementById('prepend-big-btn').value = this.value;" placeholder="Select module image" name="image" value={values.image} onChange={handleChange}  />
                                                                        </div>
                                                                        <button type="submit" style={{ background: '#4ab2cc', color: 'white' }} href="#!" className="add-service btn waves-effect waves-light">Submit</button>
                                                                      </form>
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
                <div style={{ marginTop: '3.9rem' }}></div>
                <div style={{marginTop:"14rem"}} className="space-creater"></div>
                <Footer destination="admin" />
            </main>

        </>
    )
}

export default AddModuleContent;