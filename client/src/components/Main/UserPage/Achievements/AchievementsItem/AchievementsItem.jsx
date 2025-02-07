import React from "react";
import s from "./AchievementsItem.module.css";
import cat from "../../../../../img/cat.png";


const AchievementsItem = (props) => {
    return (
        <div className={s.item}>
            <img src={cat}/>
            <div className={s.title}>{props.title}</div>
            <div className={s.description}>Create 10 quests</div>
        </div>
    )
}

export default AchievementsItem;