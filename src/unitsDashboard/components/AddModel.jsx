import React from 'react';
import './AddModel.css'

function AddModel(){
    return(
        <div className="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 style={{color:"gray"}} className="modal-title" id="exampleModalLabel">Select page structure</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div style={{textDecoration:"none"}} className="modal-body">
                        <ul>
                            <a href="addstructureone"><li style={style}>Structure One</li></a>
                            <a href="addstructuretwo"><li style={style}>Structure Two</li></a>
                            <a href="addstructurethree"><li style={style}>Structure Three</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModel;

const style = {
    listStyle: "none",
    margin: "0rem",
    cursor: "pointer",
    paddingLeft: '2rem',
    paddingTop: ".7rem",
    height: "3rem",
}