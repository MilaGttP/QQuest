import React from "react";
import s from "./StartQuest.module.css";


const StartQuest = () => {
    return (
        <div className={s.startQuest}>
            <div className={s.title}>Quest title</div>
            <div className={s.rating}>Rating: <span>10/10</span></div>
            <div className={s.type}>Type: <span>Memes</span></div>
            <div className={s.author}>Author: <span>Lizun</span></div>
            <div className={s.description}>Quest description very very very long it is a very cool quest youll like it.</div>
            <button className={s.startButton}>Start Quest</button>
        </div>
    )
}

export default StartQuest;