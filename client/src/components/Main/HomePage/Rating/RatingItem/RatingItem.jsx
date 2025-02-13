import React from "react";
import s from "./RatingItem.module.css";


const RatingItem = (props) => {
    return (
        <div className={s.ratingItem}>
            <div>{props.ratingItem.place}.
                <span className={s.title}>{props.ratingItem.email}</span>
            </div>
            <div className={s.info}>
                <div>quests: {props.ratingItem.score}</div>
            </div>
        </div>
    )
}

export default RatingItem;