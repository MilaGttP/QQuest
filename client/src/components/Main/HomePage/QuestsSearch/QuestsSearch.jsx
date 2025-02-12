import React from "react";
import s from "./QuestsSearch.module.css";
import searchIcon from "../../../../icons/searchIcon.svg";


const QuestsSearch = (props) => {

    const types = [
        "No type filter", "Entertainment", "Interactive Studying", "Team Building", "Memes", "Music", "Art", "Animals"
    ];

    return (
        <div className={s.questsSearch}>
            <img src={searchIcon} />
            <input
                placeholder={"Search quest..."}
                value={props.questFilter}
                onChange={(event) => props.setQuestFlter(event.target.value)}
            />
            <select
                value={props.questType}
                onChange={(event) => props.setQuestType(event.target.value)}
            >
                {types.map(e => <option key={e}>{e}</option>)}
            </select>
        </div>
    )
}

export default QuestsSearch;