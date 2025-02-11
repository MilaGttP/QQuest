import React from "react";
import s from "./QuestsListItem.module.css";
import cat from "../../../img/cat.png";
import {Link} from "react-router-dom";


const QuestsListItem = ({questData, ...props}) => {
    return (
        <Link to={"/quest"}>
            <div className={s.item}>
                <img src={cat}/>
                <div className={s.info}>
                    <div className={s.title}><span>{questData.title}</span></div>
                    <div className={s.questions}>{questData.questions.length} questions</div>
                    <div className={s.additional}>
                        <span>{questData.rating}/10</span>
                        <span>{questData.type}</span>
                        <span>{questData.id}</span>
                    </div>
                    <div className={s.description}>{questData.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default QuestsListItem;