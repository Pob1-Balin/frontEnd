import React from 'react';
import './AddModel.css'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function AddModel({ unitsId, module_name, module_title, lgShow, setLgShow }){
    const navigate = useNavigate();
    const handleClick = (event) => {
        navigate(event, {state:{id:unitsId, module_name:module_name, module_title:module_title}});
    }
    return(
        <>
            <Modal size="xl" show={lgShow} onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalLabel">Sélectionnez la structure de la page</h5>
                </Modal.Header>
                <Modal.Body>
                    <div style={{textDecoration:"none"}} className="modal-body-body">
                        <div className='structure-card-container'>
                            <div onClick={() => handleClick("/addstructureone")} className="card-image-container"></div>
                            <div onClick={() => handleClick("/addstructuretwo")} className="card-image-container"></div>
                            <div onClick={() => handleClick("/addstructurethree")} className="card-image-container card-image-container2"></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddModel;