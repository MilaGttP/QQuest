import React from "react";
import s from "./DoQuestPage.module.css";
import Questions from "./Questions/Questions";
import QuestContainer from "./QuestContainer/QuestContainer";
import useDoQuest from "./useDoQuest";


const DoQuestPage = () => {

   const {questData, updateQuestData} = useDoQuest();

    return (
        <div className={s.doQuestsPage}>
            <Questions title={questData.title} questions={questData.questions}/>
            <QuestContainer updateQuestData={updateQuestData} questData={questData}/>
        </div>
    )
}

export default DoQuestPage;