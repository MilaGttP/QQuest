import React from "react";
import s from "./QuestionsListItem.module.css";


const QuestionsListItem = (props) => {

    const onItemClick = () => {
        props.setCurrentQuestion(props.questionData);
    }

    return (
        <div className={s.item} onClick={onItemClick}>
            <span>{props.number}. {props.questionData.text}</span>
            <span className={s.type}>{props.questionData.type}</span>
        </div>
    )
}

export default QuestionsListItem;