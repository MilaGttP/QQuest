import React from "react";
import s from "./QuestionItem.module.css";


const QuestionItem = (props) => {
    return (
        <div className={s.item}>
            <span className={s.number}>{props.number}.</span>
            <span className={s.title}>{props.title}</span>
        </div>
    )
}

export default QuestionItem;