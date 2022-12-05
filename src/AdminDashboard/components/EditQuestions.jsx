import React from "react";
import { useNavigate } from 'react-router-dom'
import { ClearRounded } from '@mui/icons-material';
import axios from 'axios';
import { API } from '../../config'
class EditQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unitId: props.testUnit_id,
            question_id: props.id,
            Questions: props.question,
            addQuestions: props.anwersArray,
            message:'',
            addCorrectAnswers: props.correctAnswerArray,
            message2:'',
            edit:'',
        }
    }

    handleChange(e){
        const newQuestions = e.target.value;
        newQuestions !=='' && this.setState({
            Questions: newQuestions
        })
    }


    updateQuestions(exerciseInfo){
        const {question_id} = this.state;
        axios.put(`${API}/answer/answer/${question_id}`, exerciseInfo)
        .then(res => {
        })
        .catch(err => {
        })
    }

    handleSubmit(){
        const {addQuestions} = this.state;
        const { navigate } = this.props;
        const {unitId} = this.state;
        const {Questions} = this.state;
        const {addCorrectAnswers} = this.state;
        const question = Questions;
        const answer = addQuestions;
        const correct_answer = addCorrectAnswers;
        if(correct_answer.length !== 0 && answer.length !== 0 && question !== 0){
            this.updateQuestions({
                question,
                answer,
                correct_answer
            });
            navigate('/admintest', {state:{id:unitId}});
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
        const {addQuestions} = this.state;
        const newCorrectAnswer = this.newCorrectAnswer.value;
        const isOnTheList = addCorrectAnswers.includes(newCorrectAnswer);
        const isOnTheAnswersList = addQuestions.includes(newCorrectAnswer)
        if(isOnTheList){
             this.setState({
                 message2: 'This answer is already on the list.'
             })
        }
        if(!isOnTheAnswersList && newCorrectAnswer !==''){
            this.setState({
                message2: 'This correct answer does not exist on the answers list above.'
            })
        }
        if(isOnTheAnswersList && !isOnTheList){
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
        const {addQuestions, message, addCorrectAnswers, message2, edit, Questions, handleChange} = this.state;
     return <div className="row addQuestions">
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-sales-chart">
                        <div className="portlet-title">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="caption pro-sl-hd" style={{paddingBottom:"1rem", paddingTop:"-.5rem"}}>
                                        <span style={{color: 'gray', fontStyle: 'bold', fontWeight: '550'}} className="caption-subject questt">Enter Question</span>
                                        <div style={{marginTop:".8rem"}}>
                                             <textarea width="100%" className="form-control" name="question" value={Questions} onChange={(e) => {this.handleChange(e)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="actions graph-rp graph-rp-dl">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <div className="white-box analytics-info-cs mg-b-10 res-mg-t-30 table-mg-t-pro-n res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n visits2 visits">
                        <div>
                            <form ref={input => this.addForm = input} onSubmit={(e) => {this.addAnswer(e)}}>
                                <div style={{marginBottom:"1rem"}}><span style={{marginTop:".4rem", color: 'gray', fontStyle: 'bold', fontWeight: '550' }} className="caption-subject questt questt1">Answers List</span></div>
                                <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                    <input ref={input => this.newAnswer = input} type="text" className="form-control correct-input" placeholder="Add answers" />
                                    <div className="input-group-append">
                                        <button type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input">Add</button>
                                    </div>
                                </div>
                                <div style={{marginTop:"-.6rem"}}>
                                    {
                                        (message !== '' || addQuestions.length === 0) && <p className="text-danger err">{message}</p>
                                    }
                                </div>
                            </form>
                            {addQuestions.length > 0 &&
                                addQuestions.map(answer => {
                                    return <>
                                        <div style={{display:"flex",justifyContent:"space-between", borderRadius:".2rem", height:"auto", color:"gray"}} className=" mb-3 addanswers">
                                            <ul>
                                                <li className="ansers-display" style={{marginLeft:"-1.7rem", padding:"1rem", paddingBottom:".1rem", listStyle:"none"}} key={answer}>{answer}</li>
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
                                <div style={{marginBottom:"1rem", marginTop:".2rem"}}><span style={{marginTop:".4rem", color: 'gray', fontStyle: 'bold', fontWeight: '550' }} className="caption-subject questt">Correct answer/answers</span></div>
                                <div className="input-group" style={{marginBottom:"1.7rem", marginTop:"1rem"}}>
                                    <input ref={input => this.newCorrectAnswer = input} type="text" className="form-control correct-input" placeholder="Add correctanswers" />
                                    <div className="input-group-append">
                                        <button type="submit" style={{fontWeight:"550", background:'#4ab2cc', color:'white', width:"100%"}} className="btn correct-input">Add</button>
                                    </div>
                                </div>
                                <div style={{marginTop:"-.6rem"}}>
                                    {
                                        (message2 !== '' || addCorrectAnswers.length === 0) && <p className="text-danger err">{message2}</p>
                                    }
                                </div>
                            </form>
                            {addCorrectAnswers.length > 0 &&
                                addCorrectAnswers.map(correctanswer => {
                                    return <>
                                        <div style={{display:"flex",justifyContent:"space-between", borderRadius:".2rem", height:"auto", color:"gray"}} className=" mb-3 addanswers">
                                            <ul>
                                                <li className="ansers-display" style={{marginLeft:"-1.7rem", padding:"1rem",paddingBottom:".1rem", listStyle:"none"}} key={correctanswer}>{correctanswer}</li>
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
                                        <div className="btn clear-btn" onClick={(e) => this.clearCorrectAnswersList()}>Clear list</div>
                                    </div>
                            }
                            <div style={{ marginTop:"1.5rem"}}>
                                <button onClick={(e) => this.handleSubmit()} style={{fontWeight:"550", background:'#0b426a', color:'white', width:"100%", borderRadius:".4rem"}} className="btn add-questions">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

export default function (props){
    const navigate = useNavigate();
    return <EditQuestions {...props} navigate={navigate}/>
}
