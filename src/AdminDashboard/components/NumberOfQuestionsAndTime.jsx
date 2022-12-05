import React from 'react';
import '../admin.css'

function NumberOfQuestionsAndTime(props) {
  const direction = props.true;
  return (
    <>
        <div style={{marginBottom:"-2rem"}} className="testquestions admintest admintest1 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 modulehome">
          <h4><p><span className="testquestions1" style={{color: 'gray', fontStyle: 'bold', fontWeight: '550'}}>Number of question <span className="return-home">{props.number}</span> to be answered in <span className="return-home">{props.time}</span></span></p></h4>
        </div>
    </>
  );
}


export default NumberOfQuestionsAndTime;