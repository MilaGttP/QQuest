import React from "react";
import s from "./DoQuestPage.module.css";
import Questions from "./Questions/Questions";
import QuestContainer from "./QuestContainer/QuestContainer";


const DoQuestPage = () => {
    return (
        <div className={s.doQuestsPage}>
            <Questions/>
            <QuestContainer/>
        </div>
    )
}

export default DoQuestPage;