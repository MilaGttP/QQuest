import React from "react";
import s from "./MyQuests.module.css";
import QuestsListItem from "../../../common/QuestsListItem/QuestsListItem";
import {useNavigate} from "react-router-dom";


const MyQuests = (props) => {

    const navigate = useNavigate();

    const onNewButton = () => {
        navigate("/create");
    }

    return (
        <div className={s.myQuests}>
            <div className={s.title}>My quests</div>
            <div className={s.questsList}>
                {props.defaultQuestsData.map(e => <QuestsListItem key={e.id} questData={e}/>)}
            </div>
            <button onClick={onNewButton} className={s.newButton}>+</button>
        </div>
    )
}

export default MyQuests;