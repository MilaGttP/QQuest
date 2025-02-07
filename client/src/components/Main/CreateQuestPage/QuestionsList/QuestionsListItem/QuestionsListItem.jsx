import React from "react";
import s from "./QuestionsListItem.module.css";


const QuestionsListItem = (props) => {
    return (
        <div className={s.item}>{props.number}. {props.question}</div>
    )
}

export default QuestionsListItem;