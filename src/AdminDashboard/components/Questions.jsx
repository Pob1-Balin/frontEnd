import React from 'react';
function Questions(props){
  return(
    <>
        <div className="question-card caption pro-sl-hd" style={{paddingBottom:"1rem", paddingTop:"1rem"}}>
            <div style={{backgroundColor:"red", display:"flex", justifyContent:"space-between"}}>
                <div></div>
                <div style={{display:"flex"}}>
                    <button style={{height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%", borderRadius:".4rem"}}>edit</button>
                    <p>X</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">1</div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">yfuyuhioj jnjiosjisja kasmamoosa okoks nioajijia isjaiopj</div>
            </div>
            <div>
                <ul>
                    <li>trdyufgihtgyhu</li>
                    <li>trdyufgihtgyhu</li>
                    <li>trdyufgihtgyhu</li>
                    <li>trdyufgihtgyhu</li>
                </ul>
            </div>
            <div>
                <p>Answer</p>
                <ul>
                    <li>trdyufgihtgyhu</li>
                    <li>trdyufgihtgyhu</li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default Questions;








