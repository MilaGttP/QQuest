import React from "react";
import s from "./Rating.module.css";
import RatingItem from "./RatingItem/RatingItem";


const Rating = () => {

    const ratingData = ["yelyzavetanov@gmail.com"];

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