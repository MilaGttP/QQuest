import React from "react";
import s from "./Achievements.module.css";
import AchievementsItem from "./AchievementsItem/AchievementsItem";


const Achievements = (props) => {

    const defaultAchievementsData = [
        { title: "Cat!", description: "This is a cat!", status: "Active"},
        { title: "Junior Creator", description: "Created a quest", status: "Inactive"},
        { title: "Middle Creator", description: "Created 3 quests", status: "Inactive"},
        { title: "Senior Creator", description: "Created 10 quests", status: "Inactive"},
        { title: "Pioneer", description: "Completed a quest", status: "Inactive"},
        { title: "Skilled Player", description: "Completed 3 quests", status: "Inactive"},
        { title: "Pro Player", description: "Completed 10 quests", status: "Inactive"},
        { title: "Diamond Crown", description: "First in the ranking", status: "Inactive"},
        { title: "Golden Crown", description: "Second in the ranking", status: "Inactive"},
        { title: "Silver Crown", description: "Third in the ranking", status: "Inactive"},
    ];

    const achievementsData = props?.achievements || defaultAchievementsData;

    return (
        <div className={s.achievements}>
            <div className={s.achievementsHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.title}>My achievements</div>
            <div className={s.list}>
                {achievementsData.map(item =>
                    <AchievementsItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                )}
            </div>
        </div>
    );
};

export default Achievements;