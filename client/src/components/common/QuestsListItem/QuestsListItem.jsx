import React from "react";
import s from "./QuestsListItem.module.css";
import cat from "../../../img/cat.png";
import {Link} from "react-router-dom";


const QuestsListItem = ({questData, ...props}) => {

    const handleSelectQuest = () => {
        console.log(questData.idVisible);
    }

    return (
        <Link to={"/quest"} onClick={handleSelectQuest}>
            <div className={s.item}>
                <img src={questData.photo || cat}/>
                <div className={s.info}>
                    <div className={s.title}><span>{questData.name}</span></div>
                    <div className={s.additional}>{questData.authorEmail}</div>
                    <div className={s.additional}>
                        <span>{questData.avgRate}/10</span>
                        <span>{questData.genre}</span>
                        <span>{questData.idVisible}</span>
                    </div>
                    <div className={s.description}>{questData.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default QuestsListItem;