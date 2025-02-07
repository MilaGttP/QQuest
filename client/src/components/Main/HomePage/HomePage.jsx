import React from "react";
import s from "./HomePage.module.css";
import Rating from "./Rating/Rating";
import QuestsList from "./QuestsList/QuestsList";
import QuestsSearch from "./QuestsSearch/QuestsSearch";


const HomePage = () => {
    return (
        <div className={s.homePage}>
            <div className={s.questsContainer}>
                <QuestsSearch/>
                <QuestsList/>
            </div>
            <Rating/>
        </div>
    )
}

export default HomePage;