import React from 'react';
import './AddModel.css'
import UnitImageCardSelect from './UnitImageCardSelect';

function AddModel(){
    return(
        <div className="modal modal-modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content model-control">
                    <div className="modal-header">
                        <h5 style={{color:"gray", fontWeight:"bold"}} className="modal-title" id="exampleModalLabel">Select page structure</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div style={{textDecoration:"none"}} className="modal-body modal-body-body">
                        <div className='structure-card-container'>
                            <UnitImageCardSelect image="./images/structure1.png" link="/addstructureone"/>
                            <UnitImageCardSelect image="./images/structure2.png" link="/addstructuretwo"/>
                            <UnitImageCardSelect image="./images/structure3.png" link="/addstructurethree"/>
                        </div>
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