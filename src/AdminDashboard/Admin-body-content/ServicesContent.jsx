import React from "react";
import "../admin.css";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function ServicesContent(){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                 <div class="breadcome-area clients-breadcome-area addservice-bread">
                     <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="breadcome-list single-page-breadcome">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="breadcome-heading">
                                                <form role="search" class="sr-input-func">
                                                <input type="text" placeholder="Search..." class="search-int col-xs-12 form-control mobile-menu-search"/>
                                                    <a href="#"><i class="fa fa-search"></i></a>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                            <ul class="breadcome-menu">
                                                <li><a style={{fontSize:'1rem', color:'#4ab2cc'}} href="admindashboard">Dashboard /</a></li>
                                                <li style={{fontSize:'1rem', color:'gray'}}><span class="bread-blod">Services</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>




                 <div class="product-status mg-b-15 clients-product-status addservice">
                     <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="product-status-wrap drp-lst" style={{background:'#f6f8fa'}}>
                                    <div class="add-product">
                                         <h4 style={{color:'gray'}}></h4>
                                         <a style={{background:'#4ab2cc'}} href="addservice">Add Services</a>
                                     </div>
                                    <div class="asset-inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 




                 <div class="services-area">
                     <div class="container-fluid services">
                     <div class="row mg-b-15">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="courses-inner mg-t-30">
                                <div class="courses-title">
                                    <a href="#"><img src="./images/Cature.png" alt=""/></a>
                                    <h2>Apps Development</h2>
                                </div>
                                <div class="courses-alaltic" style={{paddingLeft:".3rem", fontSize:'1rem'}}>
                                    <span class="cr-ic-r"><span class="course-icon">XAF</span> 50000</span>
                                </div>
                                <div class="course-des" style={{paddingLeft:".3rem"}}>
                                    <p><span></span> <b>Number of subscribers:</b> 100+</p>
                                    <p><span></span> <b>Short description:</b>guihuhuhui  wooijijijiwqjoqjw qwjuw9jwjw ohwhw guihuhuhui  wooijijijiwqjoqjw qwjuw9jwjw ohwhw guihuhuhui  wooijijijiwqjoqjw qwjuw9jwjw ohwhw</p>
                                </div>

                                {/*-- Modal =====*/}
                                <div class="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Delete Service</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                         Are you sure you want to permanently delete this service?
                                      </div>
                                      <div class="modal-footer">
                                        <form action="php-code.php" method="POST">
                                            <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                                             <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                             <button type="submit" name="delete_service" class="btn btn-info">Yes</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*-- Modal =====*/}
                                <div class="modal fade" id="bl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Block Service</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                         Are you sure you want to block this service?
                                      </div>
                                      <div class="modal-footer">
                                        <form action="php-code.php" method="POST">
                                            <input type="hidden" name="service_id" value="<?php echo $row['service_id']; ?>"/>
                                             <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Close</button>
                                             <button type="submit" name="delete_service" class="btn btn-info">Yes</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>



                                <div class="product-buttons"> 
                                     <Link to='/adminmodulepage' style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-info">Dashboard</button></Link>
                                     <Link to='/editservice' style={{textDecoration:'none'}}><button type="button" class="button-default cart-btn mr-1 mt-1 btn-success">Edit</button></Link>
                                    <button type="button" class="button-default cart-btn mr-1 mt-1 block" data-toggle="modal" data-target="#bl">Block</button>
                                    <button type="button" class="button-default cart-btn btn-danger mt-1" data-toggle="modal" data-target="#del">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="courses-inner mg-t-30">
                                <div class="courses-title">
                                    <a href="#"><img src="./images/Cature.png" alt=""/></a>
                                    <h2>Illustrator CC 2018</h2>
                                </div>
                                <div class="courses-alaltic">
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-clock"></i></span> 1 Year</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-heart"></i></span> 50</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-dollar"></i></span> 500</span>
                                </div>
                                <div class="course-des">
                                    <p><span><i class="fa fa-clock"></i></span> <b>Duration:</b> 6 Months</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Professor:</b> Jane Doe</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Students:</b> 100+</p>
                                </div>
                                <div class="product-buttons">
                                    <button type="button" class="button-default cart-btn mr-1">Edit</button>
                                    <button type="button" class="button-default cart-btn mr-1">Block</button>
                                    <button type="button" class="button-default cart-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="courses-inner mg-t-30">
                                <div class="courses-title">
                                    <a href="#"><img src="./images/Cature.png" alt=""/></a>
                                    <h2>Illustrator CC 2018</h2>
                                </div>
                                <div class="courses-alaltic">
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-clock"></i></span> 1 Year</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-heart"></i></span> 50</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-dollar"></i></span> 500</span>
                                </div>
                                <div class="course-des">
                                    <p><span><i class="fa fa-clock"></i></span> <b>Duration:</b> 6 Months</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Professor:</b> Jane Doe</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Students:</b> 100+</p>
                                </div>
                                <div class="product-buttons">
                                    <button type="button" class="button-default cart-btn mr-1">Edit</button>
                                    <button type="button" class="button-default cart-btn mr-1">Block</button>
                                    <button type="button" class="button-default cart-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="courses-inner mg-t-30">
                                <div class="courses-title">
                                    <a href="#"><img src="./images/Cature.png" alt=""/></a>
                                    <h2>Illustrator CC 2018</h2>
                                </div>
                                <div class="courses-alaltic">
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-clock"></i></span> 1 Year</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-heart"></i></span> 50</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-dollar"></i></span> 500</span>
                                </div>
                                <div class="course-des">
                                    <p><span><i class="fa fa-clock"></i></span> <b>Duration:</b> 6 Months</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Professor:</b> Jane Doe</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Students:</b> 100+</p>
                                </div>
                                <div class="product-buttons">
                                    <button type="button" class="button-default cart-btn mr-1">Edit</button>
                                    <button type="button" class="button-default cart-btn mr-1">Block</button>
                                    <button type="button" class="button-default cart-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="courses-inner mg-t-30">
                                <div class="courses-title">
                                    <a href="#"><img src="./images/Cature.png" alt=""/></a>
                                    <h2>Illustrator CC 2018</h2>
                                </div>
                                <div class="courses-alaltic">
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-clock"></i></span> 1 Year</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-heart"></i></span> 50</span>
                                    <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-dollar"></i></span> 500</span>
                                </div>
                                <div class="course-des">
                                    <p><span><i class="fa fa-clock"></i></span> <b>Duration:</b> 6 Months</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Professor:</b> Jane Doe</p>
                                    <p><span><i class="fa fa-clock"></i></span> <b>Students:</b> 100+</p>
                                </div>
                                <div class="product-buttons">
                                    <button type="button" class="button-default cart-btn mr-1">Edit</button>
                                    <button type="button" class="button-default cart-btn mr-1">Block</button>
                                    <button type="button" class="button-default cart-btn mr-1">Delete</button>
                                    <button type="button" class="button-default cart-btn">Module</button>
                                </div>
                            </div>
                        </div>

                     </div>
                     </div>
                 </div>
                 <div style={{marginRight:"-1rem"}}><Footer/></div>
            </main>

        </>
    )
}

export default ServicesContent;