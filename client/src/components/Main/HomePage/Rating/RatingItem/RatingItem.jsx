import React from "react";
import s from "./RatingItem.module.css";


const RatingItem = (props) => {
    return (
        <div className={s.ratingItem}>
            <span>{props.number}. {props.name}</span>
            <span>quests: 10</span>
            <span>score: 10000000000</span>
        </div>
    )
}

export default RatingItem;