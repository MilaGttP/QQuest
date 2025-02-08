import React from "react";
import s from "./Questions.module.css";
import QuestionItem from "./QuestionItem/QuestionItem";


const Questions = () => {

    const questionsData = ["question one", "question two", "question three"]

    return (
        <div className={s.questions}>
            <div className={s.questTitle}><span>Quest Title</span></div>
            <div className={s.title}>Questions: 10</div>
            {questionsData.map(e => <QuestionItem key={e} title={e} number={questionsData.indexOf(e)+1}/>)}
        </div>
    )
}

export default Questions;