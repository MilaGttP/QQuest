import React from "react";
import s from "./Rating.module.css";
import RatingItem from "./RatingItem/RatingItem";


const Rating = () => {

    const ratingData = ['Lizun', 'Mila', "Vlad", "loser", "another loser"];

    return (
        <div className={s.rating}>
            <div className={s.title}>Creators rating</div>
            <div>
                {ratingData.map(e => <RatingItem number={ratingData.indexOf(e)+1} name={e} key={e}/>)}
            </div>
        </div>
    )
}

export default Rating;