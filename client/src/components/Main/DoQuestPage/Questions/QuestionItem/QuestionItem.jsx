import React from "react";
import s from "./QuestionItem.module.css";


const QuestionItem = ({question, ...props}) => {

    const isCompleted = props.currentQuestionIndex > props.number - 1;
    const isCurrent = props.currentQuestionIndex === props.number - 1 && props.isQuestActive;

    const isRight = question?.selectedAnswer?.toString() === question?.rightAnswer?.toString();

    return (
        <div className={s.item}>
            <div>
                <span className={s.number}>{props.number}.</span>
                <span className={s.title}>
                    {props.isQuestFinished || isCompleted || isCurrent ? question.title : "Question"}
                </span>
            </div>
            {props.isQuestFinished
                ? <div className={isRight ? s.completedGreen : s.completed}>{isRight ? "Right answer!" : "Wrong answer..."}</div>
                : (isCompleted || props.isQuestFinished) && <div className={s.completed}>Completed!</div>
            }
        </div>
    )
}

export default QuestionItem;