import React from "react";
import s from "./ActiveQuest.module.css";
import Timer from "./Timer/Timer";


const ActiveQuest = (props) => {

    const handleTimeUp = () => {
        props.updateQuestData("status", "finished");
    }

    return (
        <div className={s.activeQuest}>
            <div className={s.questHeader}>
                <div className={s.title}>{props.questData.title}</div>
                <div className={s.info}>
                    <Timer
                        minutes={Number(props.questData.time.slice(0, -4))}
                        onTimeUp={handleTimeUp}
                    />
                    <div>Questions left: <span className={s.questionsLeft}>{props.questData.questions.length}</span></div>
                </div>
            </div>
        </div>
    )
}

export default ActiveQuest;