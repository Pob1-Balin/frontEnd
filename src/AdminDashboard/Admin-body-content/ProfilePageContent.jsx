import React from "react";
import "../admin.css";
import "../profile.css"
import Footer from '../components/Footer'
function ProfilePageContent (){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div className="breadcome-area clients-breadcome-area">
                     <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcome-list single-page-breadcome">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="breadcome-heading">
                                                <form role="search" className="sr-input-func">
                                                <input type="text" placeholder="Search..." className="search-int col-xs-12 form-control mobile-menu-search"/>
                                                     <a href="#"><i className="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul className="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span className="bread-blod">Admin profile</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>

                 <div className="product-status mg-b-15 clients-product-status addservice">
                     <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="product-status-wrap drp-lst" style={{background:'#f6f8fa'}}>
                                    <div className="add-product">
                                         <h4 style={{color:'gray'}}></h4>
                                         <a style={{background:'#4ab2cc'}} href="editadminprofile">Update Details</a>
                                     </div>
                                    <div className="asset-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="single-pro-review-area mt-t-30 mg-b-15">
                     <div className="container-fluid">
                         <div className='row'>
                             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                 <div className="profile-info-inner">
                                     <div className="profile-img">
                                         <img src="./images/Cature.png" alt="" />
                                     </div>
                                     <div className="profile-details-hr">
                                         <div className="row">
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr">
                                                     <p><b>Name</b><br /> Fly Zend</p>
                                                 </div>
                                             </div>
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr tb-sm-res-d-n dps-tb-ntn">
                                                     <p><b>Designation</b><br /> Head of Dept.</p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="row">
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr">
                                                     <p><b>Email ID</b><br /> fly@gmail.com</p>
                                                 </div>
                                             </div>
                                             <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                                 <div className="address-hr tb-sm-res-d-n dps-tb-ntn">
                                                     <p><b>Phone</b><br /> +01962067309</p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="row">
                                             <div className="col-lg-12">
                                                 <div className="address-hr">
                                                      <p><b>Address</b><br /> E104, catn-2, Chandlodia Ahmedabad Gujarat, UK.</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>

                             <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 bio">
                                 <div className="product-payment-inner-st res-mg-t-30 analysis-progrebar-ctn">
                                     <ul id="myTabedu1" className="tab-review-design">
                                         <li className=""><p style={{fontStyle:"bold", fontSize:"1.2rem", fontWeight:"600"}}>Biography</p></li>
                                     </ul>
                                     <div id="myTabContent" style={{marginTop:"-2rem"}} className="tab-content custom-product-edit">
                                         <div className="Biography-content" id="">
                                             <div className="row">
                                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                     <div className="review-content-section">
                                                         <div className="chat-discussion" style={{height:'auto'}}>
                                                             <div className='row'>
                                                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                     <div className="review-content-section">
                                                                     <div className="row">
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Full Name</b><br /> Fly Zend</p>
				                                                        </div>
				                                                    </div>
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Mobile</b><br /> 01962067309</p>
				                                                        </div>
				                                                    </div>
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Email</b><br /> fly@gmail.com</p>
				                                                        </div>
				                                                    </div>
				                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
				                                                        <div className="address-hr biography">
				                                                            <p><b>Location</b><br /> UK</p>
				                                                        </div>
				                                                    </div>
				                                                </div>
                                                                <div className="row">
				                                                    <div className="col-lg-12">
				                                                        <div className="content-profile">
				                                                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
				                                                                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
				                                                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
				                                                                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
				                                                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
				                                                                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
				                                                        </div>
				                                                    </div>
				                                                </div>
                                                                <div className="row mg-b-15">
				                                                    <div className="col-lg-12">
				                                                        <div className="row">
				                                                            <div className="col-lg-12">
				                                                                <div className="skill-title">
				                                                                    <h2>Skill Set</h2>
				                                                                    <hr />
				                                                                </div>
				                                                            </div>
				                                                        </div>
				                                                        <div className="ex-pro">
				                                                            <ul>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                            </ul>
				                                                        </div>
				                                                    </div>
				                                                </div>
                                                                <div className="row mg-b-15">
				                                                    <div className="col-lg-12">
				                                                        <div className="row">
				                                                            <div className="col-lg-12">
				                                                                <div className="skill-title">
				                                                                    <h2>Education</h2>
				                                                                    <hr />
				                                                                </div>
				                                                            </div>
				                                                        </div>
				                                                        <div className="ex-pro">
				                                                            <ul>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                            </ul>
				                                                        </div>
				                                                    </div>
				                                                </div>
                                                                <div className="row mg-b-15">
				                                                    <div className="col-lg-12">
				                                                        <div className="row">
				                                                            <div className="col-lg-12">
				                                                                <div className="skill-title">
				                                                                    <h2>Experience</h2>
				                                                                    <hr />
				                                                                </div>
				                                                            </div>
				                                                        </div>
				                                                        <div className="ex-pro">
				                                                            <ul>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                            </ul>
				                                                        </div>
				                                                    </div>
				                                                </div>
                                                                <div className="row">
				                                                    <div className="col-lg-12">
				                                                        <div className="row">
				                                                            <div className="col-lg-12">
				                                                                <div className="skill-title">
				                                                                    <h2>Subjects</h2>
				                                                                    <hr />
				                                                                </div>
				                                                            </div>
				                                                        </div>
				                                                        <div className="ex-pro">
				                                                            <ul>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                                <li><i className="fa fa-angle-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				                                                            </ul>
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
                             </div>
                         </div>
                    </div>
                 </div>

             <Footer/>
            </main>

        </>
    )
}

export default ProfilePageContent;