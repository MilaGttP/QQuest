import React from "react";
import s from "./QuestsSearch.module.css";
import searchIcon from "../../../../icons/searchIcon.svg";


const QuestsSearch = () => {
    return (
        <div className={s.questsSearch}>
            <img src={searchIcon} />
            <input placeholder={"Search quest..."}/>
            <select>
                <option>Simple</option>
                <option>With cats</option>
                <option>School</option>
                <option>For developers</option>
            </select>
        </div>
    )
}

export default QuestsSearch;