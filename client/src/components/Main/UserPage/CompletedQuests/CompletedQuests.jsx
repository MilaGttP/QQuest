import React from "react";
import s from "./CompletedQuests.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";


const completedQuests = () => {

    const questsData = [
        "one hehe", "two hehe", "three hehe",
    ]

    return (
        <div className={s.completedQuests}>
            <div className={s.title}>Completed quests</div>
            <div className={s.questsList}>
                {questsData.map(e => <QuestsListItem key={e} title={e}/>)}
            </div>
        </div>
    )
}

export default completedQuests;