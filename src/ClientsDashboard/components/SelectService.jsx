import React from 'react';
import './SelectService.css'

function SelectService(){
    return(
        <div className="modal fade" id="select" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 style={{color:"#0b426a", fontWeight:"bold"}} className="modal-title" id="exampleModalLabel">List of subscribed services</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div style={{textDecoration:"none"}} className="modal-body">
                        <ul>
                            <li style={style}>Service One</li>
                            <li style={style}>Service Two</li>
                            <li style={style}>Service Three</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectService;

const style = {
    listStyle: "none",
    margin: "0rem",
    cursor: "pointer",
    paddingLeft: '2rem',
    paddingTop: ".7rem",
    height: "3rem",
}