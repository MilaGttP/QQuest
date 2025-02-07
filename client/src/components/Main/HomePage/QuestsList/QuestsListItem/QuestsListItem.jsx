import React from "react";
import s from "./QuestsListItem.module.css";
import cat from "../../../../../img/cat.png";


const QuestsListItem = (props) => {
    return (
        <div className={s.item}>
            <img src={cat}/>
            <div className={s.info}>
                <div className={s.title}><span>{props.title}</span></div>
                <div className={s.additional}>
                    <span>10/10</span>
                    <span>with cats</span>
                    <span>#8sd89jff86</span>
                </div>
                <div className={s.description}>This is a very cool quest with cats</div>
            </div>
        </div>
    )
}

export default QuestsListItem;