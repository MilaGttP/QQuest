import React, {useState} from "react";
import s from "./QuestInfo.module.css";
import useEditableTitle from "../../../hooks/useEditableTitle/useEditableTitle";
import useQuestForm from "./useQuestForm";


const QuestInfo = () => {

    const minutes = ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min'];
    const types = ["Entertainment", "Interactive Studying", "Team Building", "Memes", "Music", "Art", "Animals"];

    const {title, isEditTitle, handleTitleChange, handleKeyDown, setIsEditTitle} = useEditableTitle();
    const {questInfo, updateQuestInfo, handleFileChange, onSaveQuest} = useQuestForm(title);

    return (
        <div className={s.questInfo}>
            {isEditTitle
                ? <input
                    className={s.titleInput}
                    value={title}
                    onChange={(event) => handleTitleChange(event)}
                    onKeyDown={(event) => handleKeyDown(event)}
                />
                : <div className={s.title} onClick={() => setIsEditTitle(true)}>{title}</div>
            }
            <div className={s.info}>
                <div>
                    <select
                        value={questInfo.type}
                        onChange={(e) => updateQuestInfo("type", e.target.value)}
                    >
                        <option>Type</option>
                        {types.map(e => <option key={e}>{e}</option>)}
                    </select>
                    <select
                        className={s.timeInput}
                        value={questInfo.time}
                        onChange={(e) => updateQuestInfo("time", e.target.value)}
                    >
                        <option>Time</option>
                        {minutes.map(e => <option key={e}>{e}</option>)}
                    </select>
                    <input
                        className={s.imgInput}
                        type={"file"}
                        onChange={handleFileChange}
                    />
                </div>
                <button onClick={onSaveQuest} className={s.saveButton}>Save Quest</button>
            </div>
            <div>
                <textarea
                    placeholder={"Describe your quest in a few sentences..."}
                    value={questInfo.description}
                    onChange={(e) => updateQuestInfo("description", e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default QuestInfo;