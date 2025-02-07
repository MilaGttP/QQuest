import React from "react";
import s from "./QuestsList.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";


const QuestsList = () => {

    const questsData = [
        'find the cat', 'homework', 'develop quests web application', 'make friends', "solve your life problems", "find a job",
        'find the cat', 'homework', 'develop quests web application', 'make friends', "solve your life problems", "find a job",
        "qqqqquessssttttttt", "find sense in your life"
    ];

    return (
        <div className={s.questsList}>
            {/*<div>quests list</div>*/}
            {questsData.map(e => <QuestsListItem key={e} title={e}/>)}
        </div>
    )
}

export default QuestsList;