import React, {useEffect, useState} from "react";
import s from "./CreateQuestPage.module.css";
import QuestInfo from "./QuestInfo/QuestInfo";
import QuestionsList from "./QuestionsList/QuestionsList";
import QuestEditor from "./QuestEditor/QuestEditor";
import useQuestForm from "./QuestInfo/useQuestForm";
import useEditableTitle from "../../hooks/useEditableTitle/useEditableTitle";


const CreateQuestPage = () => {

    const {title, isEditTitle, handleTitleChange, handleKeyDown, setIsEditTitle} = useEditableTitle();
    const titleState =  {title, isEditTitle, handleTitleChange, handleKeyDown, setIsEditTitle};

    const [questionsData, setQuestionsData] = useState([
        {id: 1, type: "Test", text: "How much will be 2+2?"},
        {id: 2, type: "Opened", text: "How much money do you have?"},
        {id: 3, type: "Image search", text: "Where is the orange cat?"},
    ]);

    const {questInfo, updateQuestInfo, handleFileChange, onSaveQuest} = useQuestForm(title, questionsData);
    const questInfoState = {questInfo, updateQuestInfo, handleFileChange, onSaveQuest};

    // console.log(questionsData);

    const [currentQuestion, setCurrentQuestion] = useState(questionsData[0]);

    const onAddQuestion = () => {
        setQuestionsData(prevQuestions => [
            ...prevQuestions,
            {id: questionsData.length+1, type: "Test", text: "Enter your question..."}
        ]);
    };

    const findQuestionIndex = (questionsArray, question) => {
        return questionsArray.indexOf(questionsArray.find(e => e.id === question.id));
    }

    useEffect(() => {
        updateQuestInfo("questions", questionsData);
    }, [questionsData]);

    return (
        <div className={s.createQuestPage}>
            <div className={s.infoContainer}>
                <QuestInfo
                    titleState={titleState}
                    questInfoState={questInfoState}
                />
                <QuestionsList
                    setCurrentQuestion={setCurrentQuestion}
                    questionsData={questionsData}
                    onAddQuestion={onAddQuestion}
                />
            </div>
            <QuestEditor
                questionIndex={findQuestionIndex(questionsData, currentQuestion)}
                currentQuestion={currentQuestion}
                setQuestionsData={setQuestionsData}
                questionsData={questionsData}
                setCurrentQuestion={setCurrentQuestion}
            />
        </div>
    )
}

export default CreateQuestPage;