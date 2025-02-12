import React from "react";
import s from "./QuestsList.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";


const QuestsList = ({questsData, ...props}) => {

    return (
        <div className={s.questsList}>
            {!questsData.length && <div className={s.noQuests}>No quests found!</div>}
            {questsData.map(e => <QuestsListItem key={e.id} questData={e}/>)}
        </div>
    )
}

export default QuestsList;