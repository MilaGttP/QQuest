import React, {useEffect, useState} from "react";
import s from "./QuestionsList.module.css";
import QuestionsListItem from "./QuestionsListItem/QuestionsListItem";


const QuestionsList = (props) => {
    return (
        <div className={s.list}>
            <div className={s.title}>Questions</div>
            <div className={s.listContainer}>
                {props.questionsData.map(e =>
                    <QuestionsListItem
                        key={e.text}
                        questionData={e}
                        number={props.questionsData.indexOf(e) + 1}
                        setCurrentQuestion={props.setCurrentQuestion}
                    />
                )}
            </div>
            <div className={s.buttonContainer}>
                <button onClick={props.onAddQuestion} className={s.newButton}>+ Add Question</button>
            </div>
        </div>
    )
}

export default QuestionsList;