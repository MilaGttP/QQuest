import React, {useEffect, useState} from "react";
import s from "./QuestEditor.module.css";
import useEditableTitle from "../../../hooks/useEditableTitle/useEditableTitle";
import useQuestionForm from "./useQuestionForm";
import EditorType from "./EditorType/EditorType";


const QuestEditor = (props) => {

    const types = ["Test", "Opened", "Image search"];

    const {
        title,
        setTitle,
        isEditTitle,
        setIsEditTitle,
        handleTitleChange,
        handleKeyDown,
    } = useEditableTitle(props.currentQuestion.text);

    const {questionData, updateQuestionData} = useQuestionForm(props.currentQuestion.type);

    const onSaveQuestion = () => {
        const updatedQuestionsData = props.questionsData.map((question, index) => {
            if (index === props.questionIndex) {

                props.setCurrentQuestion({...question, text: title, type: questionData.type});
                return {...question, text: title, type: questionData.type};
            }
            return question;
        });

        props.setQuestionsData(updatedQuestionsData);
    }

    const onDeleteQuestion = () => {
        const updatedQuestionsData = props.questionsData.filter((_, index) => index !== props.questionIndex);

        props.setQuestionsData(updatedQuestionsData);

        const newIndex = Math.max(0, props.questionIndex - 1);

        if (updatedQuestionsData.length > 0) {
            props.setCurrentQuestion(updatedQuestionsData[newIndex]);
        } else {
            props.setCurrentQuestion(null);
        }
    }

    useEffect(() => {
        setTitle(props.currentQuestion.text);
        updateQuestionData("type", props.currentQuestion.type);

    }, [props.currentQuestion]);

    return (
        <div className={s.editor}>
            <div className={s.editorHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.editorContainer}>
                <div className={s.titleContainer}>
                    <div className={s.title}>
                        {props.questionIndex + 1 + ". "}
                        {isEditTitle
                            ? <input
                                value={title || " "}
                                onKeyDown={(e) => handleKeyDown(e)}
                                onChange={(e) => (handleTitleChange(e))}
                            />
                            : <span onClick={() => setIsEditTitle(true)}>{title}</span>
                        }
                    </div>
                    <select
                        value={questionData.type || " "}
                        onChange={(e) => updateQuestionData("type", e.target.value)}
                    >
                        {types.map(e => <option key={e}>{e}</option>)}
                    </select>
                </div>
                <EditorType type={questionData.type}/>
                <div className={s.buttonsContainer}>
                    <button onClick={onSaveQuestion} className={s.saveButton}>Save Question</button>
                    { props.questionsData.length > 1 &&
                        <button onClick={onDeleteQuestion} className={s.saveButton}>Delete Question</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default QuestEditor;