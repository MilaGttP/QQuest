import React from "react";
import s from "./Achievements.module.css";
import AchievementsItem from "./AchievementsItem/AchievementsItem";


const Achievements = () => {

    const achievementsData = [
        "Junior Creator", "Middle Creator", " Senior Creator",
        "Junior Creator", "Middle Creator", " Senior Creator",
    ];

    return (
        <div className={s.achievements}>
            <div className={s.achievementsHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.title}>My achievements</div>
            <div className={s.list}>
                {achievementsData.map(e => <AchievementsItem key={e} title={e}/>)}
            </div>
        </div>
    )
}

export default Achievements;