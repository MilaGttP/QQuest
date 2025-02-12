import React from "react";
import s from "./Rating.module.css";
import RatingItem from "./RatingItem/RatingItem";


const Rating = () => {

    const ratingData = ["user 1", "user 2", "user 3", "user 4", "user 5", "user 6"];

    return (
        <div className={s.rating}>
            <div className={s.ratingHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.title}>Creators rating</div>
            <div className={s.list}>
                {ratingData.map(e => <RatingItem number={ratingData.indexOf(e)+1} name={e} key={e}/>)}
            </div>
        </div>
    )
}

export default Rating;