import React from "react";
import s from "./QuestInfo.module.css";


const QuestInfo = () => {
    return (
        <div className={s.questInfo}>
            <div className={s.title}>Quest title</div>
            <div className={s.info}>
                <div>
                    <select>
                        <option>Select</option>
                        <option>Memes</option>
                        <option>Entertainment</option>
                        <option>Art</option>
                        <option>Music</option>
                    </select>
                    <input placeholder={"Time..."}/>
                </div>
                <button className={s.saveButton}>Save Quest</button>
            </div>
            <div>
                <textarea placeholder={"Describe your quest in a few sentences..."}></textarea>
            </div>
        </div>
    )
}

export default QuestInfo;