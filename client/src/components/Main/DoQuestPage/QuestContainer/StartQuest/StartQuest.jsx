import React from "react";
import s from "./StartQuest.module.css";


const StartQuest = ({questData, ...props}) => {

    const handleStart = () => {
        props.updateQuestData("status", "active");
    }

    return (
        <div className={s.startQuest}>
            <div className={s.title}>{questData.title}</div>
            <div className={s.rating}>Rating: <span>{questData.rating}/10</span></div>
            <div className={s.type}>Type: <span>{questData.type}</span></div>
            <div className={s.author}>Author: <span>{questData.author}</span></div>
            <div className={s.time}>Time: <span>{questData.time}</span></div>
            <div className={s.description}>{questData.description}</div>

            <button className={s.startButton} onClick={handleStart}>Start Quest</button>
        </div>
    )
}

export default StartQuest;