import React, {useState} from "react";
import s from "./HomePage.module.css";
import Rating from "./Rating/Rating";
import QuestsList from "./QuestsList/QuestsList";
import QuestsSearch from "./QuestsSearch/QuestsSearch";


const HomePage = (props) => {

    const [questType, setQuestType] = useState("No type filter");
    const [questFilter, setQuestFilter] = useState("");

    let shownQuestsData;

    const getShownQuestsData = (data) => {
        let shownData;

        if (questFilter) {
            shownData = data.filter(e => e.idVisible.includes(questFilter) || e.name.includes(questFilter));
        } else if (questType && questType !== "No type filter") {
            shownData = data.filter(e => e.genre === questType);
        } else {
            shownData = data;
        }

        return shownData;
    }

    shownQuestsData = getShownQuestsData(props.questsData || props.defaultQuestsData);

    return (
        <div className={s.homePage}>
            <div className={s.questsContainer}>
                <QuestsSearch
                    questType={questType}
                    setQuestType={setQuestType}
                    questFilter={questFilter}
                    setQuestFlter={setQuestFilter}
                />
                <QuestsList
                    questsData={shownQuestsData}
                    doQuest={props.doQuest}
                />
            </div>
            <Rating/>
        </div>
    )
}

export default HomePage;