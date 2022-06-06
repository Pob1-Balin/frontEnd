import React from "react";
import { ClearRounded } from '@mui/icons-material';
class AddQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addQuestions: [],
            message:'',
            addCorrectAnswers: [],
            message2:'',
            edit:''
        }
    }


    addAnswer(e){
        e.preventDefault();
        const {addQuestions} = this.state;
        const newAnswer = this.newAnswer.value;
        const isOnTheList = addQuestions.includes(newAnswer);
        if(isOnTheList){
             this.setState({
                 message: 'This answer is already on the list.'
             })
        }else{
            newAnswer !=='' && this.setState({
                addQuestions: [...this.state.addQuestions, newAnswer],
                message: ''
            })
        }
        this.addForm.reset();
    }

    removeAnswer(answer){
        const newAddQuestions = this.state.addQuestions.filter(addQuestions => {
             return addQuestions !== answer;
        })
        this.setState({
            addQuestions: [...newAddQuestions]
        })

        if(newAddQuestions.length === 0){
            this.setState({
                message: 'The list is empty, add some answers'
            })
        }
    }

    editAnswer(answer){
        const newAddQuestions = this.state.addQuestions.filter(addQuestions => {
             return addQuestions !== answer;

        })
        this.setState({
            edit: answer,
            addQuestions: [...newAddQuestions]
        })
    }

    clearList(){
        this.setState({
            addQuestions: [],
            message: 'The list is empty, add some answers'
        })
    }






    appendCorrectAnswers(e){
        e.preventDefault();
        const {addCorrectAnswers} = this.state;
        const newCorrectAnswer = this.newCorrectAnswer.value;
        const isOnTheList = addCorrectAnswers.includes(newCorrectAnswer);
        if(isOnTheList){
             this.setState({
                 message2: 'This answer is already on the list.'
             })
        }else{
            newCorrectAnswer !=='' && this.setState({
                addCorrectAnswers: [...this.state.addCorrectAnswers, newCorrectAnswer],
                message2: ''
            })
        }
        this.addForm2.reset();
    }
     removeCorrectAnswer(correctanswer){
        const newAddQuestions = this.state.addCorrectAnswers.filter(addCorrectAnswers => {
             return addCorrectAnswers !== correctanswer;
        })
        this.setState({
            addCorrectAnswers: [...newAddQuestions]
        })

        if(newAddQuestions.length === 0){
            this.setState({
                message2: 'The list is empty, add some correctanswers'
            })
        }
    }

    clearCorrectAnswersList(){
        this.setState({
            addCorrectAnswers: [],
            message2: 'The list is empty, add some correctanswers'
        })
    }


    render() {
        const {addQuestions, message, addCorrectAnswers, message2, edit} = this.state;
     return <div>
                <form ref={input => this.addForm = input} onSubmit={(e) => {this.addAnswer(e)}}>
                    <div style={{marginBottom:"1rem", marginTop:".2rem"}}><span style={{marginTop:".4rem", fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }} className="caption-subject">Answers List</span></div>
                    <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                        <input ref={input => this.newAnswer = input} style={{height:"2.5rem"}} type="text" className="form-control" placeholder="Add answers" />
                        <div className="input-group-append">
                             <button type="submit" style={{fontWeight:"550", height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%"}} className="btn">Add</button>
                        </div>
                    </div>
                    <div style={{marginTop:"-.6rem"}}>
                        {
                             (message !== '' || addQuestions.length === 0) && <p className="text-danger">{message}</p>
                        }
                    </div>
                </form>
                {addQuestions.length > 0 &&
                    addQuestions.map(answer => {
                        return <>
                            <div style={{display:"flex",justifyContent:"space-between", borderRadius:".2rem", height:"auto"}} className=" mb-3 addanswers">
                                <ul>
                                     <li style={{marginLeft:"-1.7rem", padding:"1rem",paddingBottom:".1rem", listStyle:"none", fontSize:".9rem"}} key={answer}>{answer}</li>
                                </ul>
                                <ClearRounded onClick={(e) => this.removeAnswer(answer)} style={{color:"red", fontSize:"1.3rem", fontWeight:"900", marginTop:".7rem", marginRight:".5rem"}} className="delete-answer-btn"/>
                            </div>
                                </>
                    })
                }
                {
                    addQuestions.length > 1 &&
                        <div style={{display:"flex", justifyContent:"space-between", marginTop:"1.5rem"}}> 
                             <div></div>
                             <div className="btn" onClick={(e) => this.clearList()}>Clear list</div>
                        </div>
                }

                {/* add correctanswers */}

                <form ref={input => this.addForm2 = input} onSubmit={(e) => {this.appendCorrectAnswers(e)}}>
                    <div style={{marginBottom:"1rem", marginTop:".2rem"}}><span style={{marginTop:".4rem", fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }} className="caption-subject">Correct answer/answers</span></div>
                    <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                        <input ref={input => this.newCorrectAnswer = input} style={{height:"2.5rem"}} type="text" className="form-control" placeholder="Add correctanswers" />
                        <div className="input-group-append">
                             <button type="submit" style={{fontWeight:"550", height:'2.5rem', background:'#4ab2cc', color:'white', width:"100%"}} className="btn">Add</button>
                        </div>
                    </div>
                    <div style={{marginTop:"-.6rem"}}>
                        {
                             (message2 !== '' || addCorrectAnswers.length === 0) && <p className="text-danger">{message2}</p>
                        }
                    </div>
                </form>
                {addCorrectAnswers.length > 0 &&
                    addCorrectAnswers.map(correctanswer => {
                        return <>
                            <div style={{display:"flex",justifyContent:"space-between", borderRadius:".2rem", height:"auto"}} className=" mb-3 addanswers">
                                <ul>
                                     <li style={{marginLeft:"-1.7rem", padding:"1rem",paddingBottom:".1rem", listStyle:"none", fontSize:".9rem"}} key={correctanswer}>{correctanswer}</li>
                                </ul>
                                <ClearRounded onClick={(e) => this. removeCorrectAnswer(correctanswer)} style={{color:"red", fontSize:"1.3rem", fontWeight:"900", marginTop:".7rem", marginRight:".5rem"}} className="delete-answer-btn"/>
                            </div>
                                </>
                    })
                }
                {
                    addCorrectAnswers.length > 1 &&
                        <div style={{display:"flex", justifyContent:"space-between", marginTop:"1.5rem"}}>
                             <div></div>
                             <div className="btn" onClick={(e) => this.clearCorrectAnswersList()}>Clear list</div>
                        </div>
                }

            </div>
    }
}

export default AddQuestions;
