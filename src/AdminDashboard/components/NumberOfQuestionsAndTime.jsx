import React from 'react';
import '../admin.css'

function NumberOfQuestionsAndTime(props) {
  const direction = props.true;
  return (
    <>
        <div style={{marginBottom:"-2rem"}} className="testquestions admintest admintest1 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 modulehome">
          <h4 style={{marginLeft:"1rem", fontSize:"1.2rem"}}><p><span className="testquestions1" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550'}}>Numéro de question <span className="return-home">{props.number}</span> répondre dans <span className="return-home">{props.time}</span></span></p></h4>
        </div>
    </>
  );
}


export default NumberOfQuestionsAndTime;