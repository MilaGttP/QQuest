import React from "react";
import s from "./QuestionsList.module.css";
import QuestionsListItem from "./QuestionsListItem/QuestionsListItem";


const QuestionsList = () => {

    const questionsData = [
      "how much will be 2+2?",
      "how much money do you have?",
      "where is the orange cat&",
      "where is the gray cat&",
      "where is the cat&"
    ];

    return (
        <div className={s.list}>
            <div className={s.title}>Questions</div>
            <div className={s.listContainer}>
                {questionsData.map(e =>
                    <QuestionsListItem key={e} question={e} number={questionsData.indexOf(e) + 1}/>
                )}
            </div>
            <div className={s.buttonContainer}>
                <button className={s.newButton}>+ Add Question</button>
            </div>
        </div>
    )
}

export default QuestionsList;