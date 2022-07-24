import React from 'react';
import UnitStructures from '../pages/structures';
import './AddModel.css'
import structure1 from '../s03.png'
import structure2 from '../s17.png'
import structure3 from '../s23.png'
import {useLocation, NavLink} from 'react-router-dom';


function AddModel() {
    const location =useLocation()
    var unitsInfo = location.state
    const units_id = unitsInfo.id
    console.log(units_id)
    return (
        <div className="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 style={{ color: "gray", fontWeight: "bold" }} className="modal-title" id="exampleModalLabel">Select page structure</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div style={{ textDecoration: "none" }} className="modal-body">
                        <div className='text-center'>
                            {/* <li><UnitStructures /></li> */}
                            <NavLink to="/addstructureone" state={unitsInfo}><div className="struct1" style={{marginTop:'20px'}}>
                                <button>
                                    <img src={structure1} width={300} height={300}/>
                                    <h5>Video Content</h5>
                                </button>
                            </div></NavLink>
                            <a href="addstructuretwo"><div className="struct1" style={{marginTop:'20px'}}>
                                <button>
                                    <img src={structure2} width={300} height={300} />
                                    <h5>Content with images</h5>
                                </button>
                            </div></a>
                            <a href="addstructurethree"><div className="struct1" style={{marginTop:'20px'}}>
                                <button>
                                    <img src={structure3} width={300} height={300} />
                                    <h5>Content with Text Only</h5>
                                </button>
                            </div></a>
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