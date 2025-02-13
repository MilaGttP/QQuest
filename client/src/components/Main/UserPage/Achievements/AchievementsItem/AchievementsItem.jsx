import React from "react";
import s from "./AchievementsItem.module.css";
import cat from "../../../../../img/cat.png";


const AchievementsItem = (props) => {

    const itemStyle = props.status === "Active" ? { opacity: 1 } : { opacity: 1 };

    return (
        <div className={s.item}
             style={itemStyle}
        >
            <img src={props.img || cat} alt="Achievement icon" />
            <div className={s.title}>{props.title}</div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

export default AchievementsItem;