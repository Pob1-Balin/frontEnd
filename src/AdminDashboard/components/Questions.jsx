import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { API } from '../../config'

function Questions(props){
    const id = props.id;
    const testUnit_id = props.testUnit_id;
    var anwersArray = props.answer;
    var correctAnswerArray = props.correctAnswer;
    var question = props.question;
    const states = props.states
    const delete_id = "del1" + props.index;
    const new_delete_id = "#" + delete_id;

    const deleteQuestion = () => {
      axios
          .delete(`${API}/answer/${id}`)
          .then((res) => {
              if (res.status === 200) {
                  //  alert("Student successfully deleted");
                   window.location.reload();
                  //  console.log(`${API}/service/${id}`)
              } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
    }

  return(
    <>
        <div data-aos="fade-left" data-aos-offset="50" className="caption pro-sl-hd">
            {/*-- Modal =====*/}
            <div class="modal fade" id={delete_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Supprimer la question</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style={{color:"black"}}>
                        <p>Êtes-vous sûr de vouloir supprimer définitivement cette question ?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger mr-1" data-dismiss="modal">Fermé</button>
                        <button type="submit" name="" onClick={deleteQuestion} style={{backgroundColor: "#3363ad", color:"white"}} class="btn">Oui</button>
                    </div>
                    </div>
                </div>
            </div>
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
                     <Link to="/editquestion" state={{correctAnswerArray:correctAnswerArray, anwersArray, id:id, question:question, testUnit_id:testUnit_id, states: states}}><button style={{width:"4.5rem", marginRight:".2rem", outline:"none"}} className="add-buttons question-actions">Éditer</button></Link>
                     <button style={{width:"5rem", marginRight:"2rem", outline:"none"}} data-toggle="modal" data-target={new_delete_id} className="question-actions add-buttons bg-danger">Effacer</button>
                </div>
            </div>
            <hr/>
        </div>
    </>
  );
}

export default Questions;








