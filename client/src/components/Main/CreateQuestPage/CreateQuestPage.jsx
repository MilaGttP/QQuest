import React from "react";
import s from "./CreateQuestPage.module.css";
import QuestInfo from "./QuestInfo/QuestInfo";
import QuestionsList from "./QuestionsList/QuestionsList";
import QuestEditor from "./QuestEditor/QuestEditor";


const CreateQuestPage = () => {
    return (
        <div className={s.createQuestPage}>
            <div className={s.infoContainer}>
                <QuestInfo/>
                <QuestionsList/>
            </div>
            <QuestEditor/>
        </div>
    )
}

export default CreateQuestPage;