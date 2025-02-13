import React from "react";
import s from "./Rating.module.css";
import RatingItem from "./RatingItem/RatingItem";


const Rating = (props) => {

    // const ratingData = ["yelyzavetanov@gmail.com"];

    return (
        <div className={s.rating}>
            <div className={s.ratingHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.title}>Creators rating</div>
            <div className={s.list}>
                { props.rating.length &&
                    props.rating.map(e => <RatingItem number={e.place} ratingItem={e} key={e}/>)
                }
            </div>
        </div>
    )
}

export default Rating;