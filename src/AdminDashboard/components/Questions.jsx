import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { API } from '../../config'
import Modal from 'react-bootstrap/Modal';

function Questions({ questionId, id, question, index, answer, testUnit_id, correctAnswer, states, refresh, setRefresh }){
    const props = {}
    props.questionId = questionId; props.id = id; props.question = question; props.index = index; props.answer = answer; props.testUnit_id = testUnit_id; props.correctAnswer = correctAnswer; props.states = states;
    const navigate = useNavigate()
    var anwersArray = props.answer;
    var correctAnswerArray = props.correctAnswer;
    const [lgShow, setLgShow] = useState(false); 

    const deleteQuestion = () => {
      axios
          .delete(`${API}/answer/${id}`)
          .then((res) => {
              if (res.status === 200) {
                setLgShow(false)
                setRefresh(refresh + 1)
              } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
    }

    const moveEdit = () => {
        localStorage.setItem('redirecteditserv', true);
        navigate("/editquestion", {state:{correctAnswerArray:correctAnswerArray, anwersArray, id:id, question:question, testUnit_id:testUnit_id, states: states}});
    }

  return(
    <>
        <div data-aos="fade-left" data-aos-offset="50" className="caption pro-sl-hd">
            {/*-- Modal =====*/}
            <Modal size="md" show={lgShow} onHide={() => setLgShow(false)}>
                <Modal.Header>
                    <h5 className="modal-title" id="exampleModalLabel">Supprimer la question</h5>
                </Modal.Header>
                <Modal.Body>
                    <div style={{margin:"-1rem"}} className="modal-body">
                        <p style={{color: "gray"}}>Êtes-vous sûr de vouloir supprimer définitivement cette question ?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div style={{margin:"-1rem"}} className='modal-footer'>
                        <button type="button" class="btn btn-danger mr-1" onClick={() => setLgShow(false)} >Fermé</button>
                        <button type="submit" class="btn" style={{backgroundColor: "#3363ad", color:"white"}} onClick={deleteQuestion}>Oui</button>
                    </div>
                    
                </Modal.Footer>
            </Modal>
            <div className='question-inner-card'>
                <div style={{color: 'gray', fontStyle: 'bold', fontWeight: '550', display:"flex"}}>
                    <div className="admin-question" style={{marginRight:".5rem"}}>{props.index}.</div>
                    <div className="admin-question" style={{fontSize:"1.1rem"}}>{props.question}</div>
                </div>
                <input type="hidden" value={props.UNIT_IDS}/>
                <div>
                    <ul style={{marginLeft:"1.4rem", marginTop:".5rem"}}>
                        {anwersArray.map((answerData)=><li key={answerData}>{answerData}</li>)}
                    </ul>
                </div>
                <div>
                    <p style={{marginLeft:"1.7rem", fontSize: '1.2rem', color: 'gray', fontStyle: 'bold', fontWeight: '550'}} className="ansers">Answer</p>
                    <ul style={{marginLeft:"1.4rem"}}>
                        {correctAnswerArray.map((correctAnswerData)=><li key={correctAnswerData}>{correctAnswerData}</li>)}
                    </ul>
                </div>
            </div>
            <div className='answer-footer-btns'>
                <div></div>
                <div style={{display:"flex"}}>
                     <a onClick={moveEdit} href="#"><button style={{width:"4.5rem", marginRight:".2rem", outline:"none"}} className="add-buttons question-actions">Éditer</button></a>
                     <button style={{width:"5rem", marginRight:"2rem", outline:"none"}} className="question-actions add-buttons bg-danger" onClick={() => setLgShow(true)}>Effacer</button>
                </div>
            </div>
            <hr/>
        </div>
    </>
  );
}

export default Questions;








