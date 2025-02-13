import React from "react";
import s from "./QuestsListItem.module.css";
import cat from "../../../img/cat.png";
import {Link} from "react-router-dom";
import {fetchQuestions} from "../../../api";


const QuestsListItem = ({questData, ...props}) => {

    const {updateQuestData} = props.doQuest;

    const handleSelectQuest = () => {
        console.log(questData.idVisible);
        fetchQuestions(questData.idVisible).then(res => {
                console.log(res)
                updateQuestData("questions", res);
                updateQuestData("title", questData.name);
                updateQuestData("type", questData.genre);
                updateQuestData("author", questData.authorEmail || "some_user");
                updateQuestData("time", questData.timeLimit);
                updateQuestData("id", questData.idVisible);
                updateQuestData("status", "inactive");
                console.log(questData);
            }
        );
    }

    return (
        <Link to={"/quest"} onClick={handleSelectQuest}>
            <div className={s.item}>
                <img src={questData.photo || cat}/>
                <div className={s.info}>
                    <div className={s.title}><span>{questData.name}</span></div>
                    <div className={s.additional}>{questData.authorEmail}</div>
                    <div className={s.additional}>
                        <span>{questData.avgRate}/10</span>
                        <span>{questData.genre}</span>
                        <span>{questData.idVisible}</span>
                    </div>
                    <div className={s.description}>{questData.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default QuestsListItem;