import React from "react";
import s from "./QuestContainer.module.css";
import StartQuest from "./StartQuest/StartQuest";


const QuestContainer = () => {
    return (
        <div className={s.quest}>
            <div className={s.containerHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.questContent}>
                <StartQuest/>
            </div>
        </div>
    )
}

export default QuestContainer;