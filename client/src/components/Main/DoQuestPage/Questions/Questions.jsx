import React from "react";
import s from "./Questions.module.css";
import QuestionItem from "./QuestionItem/QuestionItem";


const Questions = ({questions, ...props}) => {

    return (
        <div className={s.questions}>
            <div className={s.questTitle}><span>{props.title}</span></div>
            <div className={s.title}>Questions: {questions.length}</div>
            {questions.map(e => <QuestionItem key={e.id} question={e} number={questions.indexOf(e)+1}/>)}
        </div>
    )
}

export default Questions;