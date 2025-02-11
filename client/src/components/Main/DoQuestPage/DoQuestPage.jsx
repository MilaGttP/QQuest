import React from "react";
import s from "./DoQuestPage.module.css";
import Questions from "./Questions/Questions";
import QuestContainer from "./QuestContainer/QuestContainer";
import useDoQuest from "./useDoQuest";


const DoQuestPage = () => {

   const {questData, updateQuestData, setSelectedAnswer} = useDoQuest();

    return (
        <div className={s.doQuestsPage}>
            <Questions
                title={questData.title}
                questions={questData.questions}
                currentQuestionIndex={questData.currentQuestionIndex}
                isQuestActive={questData.status === "active"}
                isQuestFinished={questData.status === "finished"}
            />
            <QuestContainer
                setSelectedAnswer={setSelectedAnswer}
                updateQuestData={updateQuestData}
                questData={questData}
            />
        </div>
    )
}

export default DoQuestPage;