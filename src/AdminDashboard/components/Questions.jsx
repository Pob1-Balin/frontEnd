import React from 'react';
import { Link } from 'react-router-dom';
function Questions(props){
  return(
    <>
        <div data-aos="fade-left" data-aos-offset="200" className=" caption pro-sl-hd" style={{marginBottom:"2rem"}}>
            {/*-- Modal =====*/}
            <div class="modal fade" id="del" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Question</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to permanently delete this Question?
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
            <div className='question-inner-card' style={{marginLeft:"1.5rem", marginRight:"1.5rem", marginTop:"1rem"}}>
                <div className="row">
                    <div style={{fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550'}} className="col-lg-1 col-md-1 col-sm-1 col-xs-1">1.</div>
                    <div style={{marginLeft:"-3rem"}} className="col-lg-11 col-md-11 col-sm-11 col-xs-11"><p>{props.question}</p></div>
                </div>
                <div>
                    <ul style={{marginLeft:"1.4rem"}}>
                        <li><i className="fa fa-angle-right"></i>{props.answer}</li>
                    </ul>
                </div>
                <div>
                    <p style={{marginLeft:"1.7rem", fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550'}}>Answer</p>
                    <ul style={{marginLeft:"1.4rem"}}>
                        <li><i className="fa fa-angle-right"></i>{props.correctAnswer}</li>
                    </ul>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div></div>
                <div style={{display:"flex"}}>
                     <Link to="/addquestion"><button style={{width:"4rem", marginRight:".2rem"}} className="add-buttons question-actions">Edit</button></Link>
                     <button style={{width:"5rem", marginRight:"2rem"}} data-toggle="modal" data-target="#del" className="question-actions add-buttons bg-danger">Delete</button>
                </div>
            </div>
            <hr/>
        </div>
    </>
  );
}

export default Questions;








