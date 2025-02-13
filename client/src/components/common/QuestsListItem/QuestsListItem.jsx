import React from "react";
import s from "./QuestsListItem.module.css";
import cat from "../../../img/cat.png";
import {Link, useNavigate} from "react-router-dom";
import {deleteQuest, fetchCreatedQuests, fetchQuestions} from "../../../api";
import {useAuth0} from "@auth0/auth0-react";


const QuestsListItem = ({questData, ...props}) => {

    const {isAuthenticated} = useAuth0();
    const {updateQuestData} = props.doQuest;
    const navigate = useNavigate();

    const handleSelectQuest = () => {
        if (isAuthenticated) {
            fetchQuestions(questData.idVisible).then(res => {
                    updateQuestData("questions", res);
                    updateQuestData("title", questData.name);
                    updateQuestData("type", questData.genre);
                    updateQuestData("author", questData.authorEmail || "some_user");
                    updateQuestData("time", questData.timeLimit);
                    updateQuestData("id", questData.idVisible);
                    updateQuestData("status", "inactive");
                }
            );
            navigate('/quest');
        } else {
            alert("Log in to complete a quest!")
        }
    }

    const handleDelete = () => {
        deleteQuest(questData.idVisible).then(res =>
            fetchCreatedQuests(props.email)
        );
    }

    return (
            <div className={s.item}>
                <img src={questData.photo || cat} onClick={handleSelectQuest}/>
                <div className={s.info}>
                    <div className={s.title} onClick={handleSelectQuest}>
                        <span>{questData.name}</span>
                    </div>
                    <div className={s.additional}>{questData.authorEmail}</div>
                    <div className={s.additional}>
                        {props.isDelete &&
                            <button onClick={handleDelete} className={s.delete}>Delete</button>
                        }
                        <span>{questData.genre}</span>
                        <span>{questData.idVisible}</span>
                    </div>
                    <div className={s.description}>{questData.description}</div>
                </div>
            </div>
    )
}

export default QuestsListItem;