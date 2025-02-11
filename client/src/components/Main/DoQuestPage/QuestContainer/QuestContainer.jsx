import React from "react";
import s from "./QuestContainer.module.css";
import StartQuest from "./StartQuest/StartQuest";
import ActiveQuest from "./ActiveQuest/ActiveQuest";
import FinishedQuest from "./FinishedQuest/FinishedQuest";


const QuestContainer = (props) => {
    return (
        <div className={s.quest}>
            <div className={s.containerHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.questContent}>
                {props.questData.status === "inactive" &&
                    <StartQuest updateQuestData={props.updateQuestData} questData={props.questData}/>
                }
                {props.questData.status === "active" &&
                    <ActiveQuest
                        updateQuestData={props.updateQuestData}
                        questData={props.questData}
                        setSelectedAnswer={props.setSelectedAnswer}
                    />
                }
                {props.questData.status === "finished" &&
                    <FinishedQuest
                        questData={props.questData}
                        updateQuestData={props.updateQuestData}
                    />
                }
            </div>
        </div>
    )
}

export default QuestContainer;