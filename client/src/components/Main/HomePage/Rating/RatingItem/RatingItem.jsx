import React from "react";
import s from "./RatingItem.module.css";


const RatingItem = (props) => {
    return (
        <div className={s.ratingItem}>
            <div>{props.number}. <span className={s.title}>{props.name}</span></div>
            <div className={s.info}>
                <div>quests: 10</div>
                <div>score: 10000000000</div>
            </div>
        </div>
    )
}

export default RatingItem;