import React from "react";
import s from "./Opened.module.css";


const Opened = () => {
    return (
        <div className={s.opened}>
            <div className={s.title}>Enter the right answer for your question: </div>
            <input placeholder={"Your right answer..."} />
        </div>
    )
}

export default Opened;