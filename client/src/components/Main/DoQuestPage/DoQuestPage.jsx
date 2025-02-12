import React from "react";
import s from "./DoQuestPage.module.css";
import Questions from "./Questions/Questions";
import QuestContainer from "./QuestContainer/QuestContainer";
import useDoQuest from "./useDoQuest";
import Comments from "./Comments/Comments";


const DoQuestPage = () => {

    const {questData, updateQuestData, setSelectedAnswer, addComment, deleteComment} = useDoQuest();


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
                    />
                }
            </div>
        </div>
    )
}

export default DoQuestPage;