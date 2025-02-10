import React from "react";
import s from "./QuestionItem.module.css";


const QuestionItem = ({question, ...props}) => {
    return (
        <div className={s.item}>
            <span className={s.number}>{props.number}.</span>
            <span className={s.title}>{question.text}</span>
        </div>
    )
}

export default QuestionItem;