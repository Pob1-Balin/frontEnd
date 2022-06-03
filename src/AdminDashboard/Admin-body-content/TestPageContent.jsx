import React from "react";
import "../admin.css";
import "../profile.css"
import Footer from '../../ClientsDashboard/components/Footer'
function TestPageContent(){
    return(
        <>
            <main className="px-md-4 wrapper2 dashboard-pages">
                <div style={{marginTop:"-3.5rem", marginBottom:"1rem"}} className="testedit col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-payment-inner-st res-mg-t-30 analysis-progrebar-ctn">
                        <div data-aos="fade-right" data-aos-offset="400" className="content-profile">
                            <p style={{paddingTop:"1rem", fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Remaining Time left to stop <span>00:00:00</span></p>
                        </div>
                    </div>
                </div>

                <div className="single-pro-review-area mt-t-30 mg-b-15 testedit">
                     <div className="container-fluid">
                         <div className='row'>
                             <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                 <div data-aos="fade-right" data-aos-offset="100" className="profile-info-inner">
                                    <div className="question">
                                         <div><p style={{ fontSize: '1.3rem', color: '#4ab2cc', fontStyle: 'bold', fontWeight: '550' }}>Question 1 <span>/</span> 10</p></div>
                                    </div>
                                    <div>
                                         <p style={{ fontSize: '.9rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>ewrtyfugihoj ytugiojk ugwhaiuh akjuhuahws jsuhouiah kuwsuoawh wuhuo uwhuhw iojff ijqa ojkpo yewqgudg hudoiqa hdioqa</p>
                                    </div>
                                 </div>
                             </div>

                             <div data-aos="fade-left" data-aos-offset="400" className="col-lg-5 col-md-5 col-sm-5 col-xs-12 answers">
                                 <div className="product-payment-inner-st res-mg-t-30 analysis-progrebar-ctn">
                                    <div className="question">
                                        <div data-aos="fade-left" data-aos-offset="400"><p style={{ fontSize: '1.1rem', color: '#4ab2cc', fontStyle: 'bold', fontWeight: '550' }}>Select the correct Answer/Answers</p></div>
                                    </div>
                                    <div className="answers-form-input" style={{marginTop:"2rem"}}>
                                        <form>
                                            <div style={{borderRadius:".4rem",paddingRight:"5px"}} className=" mb-3 form-check testedit1">
                                                 <input style={{marginLeft:".1rem", marginTop:"1rem"}} class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                                 <label style={{marginLeft:"1.2rem", marginTop:".6rem" , marginBottom:"1rem", fontSize:".9rem"}} class="form-check-label">uehwu uwui uquwqi uhjioj ouiihjoiji ouiihjioj uoh</label>
                                            </div>
                                            <div style={{borderRadius:".4rem",paddingRight:"5px"}} className="mb-3 form-check testedit1">
                                                 <input style={{marginLeft:".1rem", marginTop:"1rem"}} class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                                 <label style={{marginLeft:"1.2rem", marginTop:".6rem" , marginBottom:"1rem", fontSize:".9rem"}} class="form-check-label">uehwu uwui uquwqi uhjioj ouiihjoiji ouiihjioj uoh</label>
                                            </div>
                                            <div style={{borderRadius:".4rem",paddingRight:"5px"}} className="mb-3 form-check testedit1">
                                                 <input style={{marginLeft:".1rem", marginTop:"1rem"}} class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                                 <label style={{marginLeft:"1.2rem", marginTop:".6rem" , marginBottom:"1rem", fontSize:".9rem"}} class="form-check-label">uehwu uwui uquwqi uhjioj ouiihjoiji ouiihjioj uoh</label>
                                            </div>
                                            <div style={{borderRadius:".4rem",paddingRight:"5px"}} className="mb-3 form-check testedit1">
                                                 <input style={{marginLeft:".1rem", marginTop:"1rem"}} class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                                 <label style={{marginLeft:"1.2rem", marginTop:".6rem" , marginBottom:"1rem", fontSize:".9rem"}} class="form-check-label">uehwu uwui uquwqi uhjioj ouiihjoiji ouiihjioj uoh uehwu uwui uquwqi uhjioj ouiihjoiji ouiihjioj uoh uehwu uwui uquwqi uhjioj ouiihjoiji ouiihjioj uoh</label>
                                            </div>
                                           
                                            <button type="submit" style={{marginTop:"1.5rem", height:'2.5rem', background:'#0b426a', color:'white', width:"100%", borderRadius:".5rem"}} className="btn">NEXT</button>
                                        </form>
                                    </div>
                                 </div>
                             </div>

                         </div>
                    </div>
                </div>

             <Footer destination="/legalnotice"/>
            </main>

        </>
    )
}

export default TestPageContent;