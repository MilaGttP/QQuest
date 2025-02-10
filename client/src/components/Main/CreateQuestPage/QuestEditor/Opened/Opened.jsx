import React, {useState} from "react";
import s from "./Opened.module.css";


const Opened = ({rightAnswer, onEditRightAnswer, ...props}) => {

    return (
        <div className={s.opened}>
            <div className={s.title}>Enter the right answer for your question: </div>
            <input onChange={onEditRightAnswer} value={rightAnswer} placeholder={"Your right answer..."} />
        </div>
    )
}

export default Opened;