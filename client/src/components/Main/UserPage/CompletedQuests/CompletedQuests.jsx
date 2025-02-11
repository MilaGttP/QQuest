import React from "react";
import s from "./CompletedQuests.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";


const completedQuests = (props) => {
    return (
        <div className={s.completedQuests}>
            <div className={s.title}>Completed quests</div>
            <div className={s.questsList}>
                {props.defaultQuestsData.map(e => <QuestsListItem key={e.id} questData={e}/>)}
            </div>
        </div>
    )
}

export default completedQuests;