import React, {useEffect} from "react";
import s from "./DoQuestPage.module.css";
import Questions from "./Questions/Questions";
import QuestContainer from "./QuestContainer/QuestContainer";
import useDoQuest from "./useDoQuest";
import Comments from "./Comments/Comments";
import {fetchComments} from "../../../api";


const DoQuestPage = (props) => {

    const {questData, updateQuestData, setSelectedAnswer, addComment, deleteComment, setComments} = props.doQuest;

    useEffect(() => {
        fetchComments(questData.id).then(res => setComments(res || []));
    }, []);

    const isQuestFinished = questData.status === "finished";

    return (
        <div className={s.doQuestsPage}>
                <Questions
                    title={questData.title}
                    questions={questData.questions}
                    currentQuestionIndex={questData.currentQuestionIndex}
                    isQuestActive={questData.status === "active"}
                    isQuestFinished={isQuestFinished}
                />
            <div>
                <QuestContainer
                    setSelectedAnswer={setSelectedAnswer}
                    updateQuestData={updateQuestData}
                    questData={questData}
                />
                {isQuestFinished &&
                    <Comments
                        comments={questData.comments}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        nanoId={questData.id}
                    />
                }
            </div>
        </div>
    )
}

export default DoQuestPage;