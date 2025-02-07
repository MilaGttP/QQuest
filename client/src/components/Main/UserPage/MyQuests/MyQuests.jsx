import React from "react";
import s from "./MyQuests.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";
import {useNavigate} from "react-router-dom";


const MyQuests = () => {

    const navigate = useNavigate();

    const questsData = [
        "quest one", "find the orange cat", "find a new job", "do maths homework", "quest two",
    ];

    const onNewButton = () => {
        navigate("/create");
    }

    return (
        <div className={s.myQuests}>
            <div className={s.title}>My quests</div>
            <div className={s.questsList}>
                {questsData.map(e => <QuestsListItem key={e} title={e}/>)}
            </div>
            <button onClick={onNewButton} className={s.newButton}>+</button>
        </div>
    )
}

export default MyQuests;