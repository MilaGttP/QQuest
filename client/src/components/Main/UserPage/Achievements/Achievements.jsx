import React from "react";
import s from "./Achievements.module.css";
import AchievementsItem from "./AchievementsItem/AchievementsItem";


const Achievements = () => {

    const achievementsData = [
        { title: "Junior Creator", description: "Created a quest", status: "Active"},
        { title: "Middle Creator", description: "Created 3 quests", status: "Inactive"},
        { title: "Senior Creator", description: "Created 10 quests", status: "Inactive"},
        { title: "Pioneer", description: "Completed a quest", status: "Active"},
        { title: "Skilled Player", description: "Completed 3 quests", status: "Inactive"},
        { title: "Pro Player", description: "Completed 10 quests", status: "Active"},
        { title: "Diamond Crown", description: "First in the ranking", status: "Active"},
        { title: "Gold Crown", description: "Second in the ranking", status: "Inactive"},
        { title: "Silver Crown", description: "Third in the ranking", status: "Active"}
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