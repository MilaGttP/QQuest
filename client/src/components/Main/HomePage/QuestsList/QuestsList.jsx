import React from "react";
import s from "./QuestsList.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";


const QuestsList = ({questsData, ...props}) => {

    return (
        <div className={s.questsList}>
            {questsData.map(e => <QuestsListItem key={e.id} questData={e}/>)}
        </div>
    )
}

export default QuestsList;