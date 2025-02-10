import React from "react";
import s from "./QuestEditor.module.css";
import useQuestionEditor from "./useQuestionEditor";
import EditorType from "./EditorType/EditorType";

const QuestEditor = (props) => {
    const {
        title,
        isEditTitle,
        setIsEditTitle,
        handleTitleChange,
        handleKeyDown,
        questionData,
        updateQuestionData,
        options,
        optionsOperations,
        imageOptions,
        imageOperations,
        rightAnswer,
        onEditRightAnswer,
        onSaveQuestion,
        onDeleteQuestion,
    } = useQuestionEditor(props);

    const types = ["Test", "Opened", "Image search"];

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
                        {isEditTitle ? (
                            <input
                                value={title || " "}
                                onKeyDown={handleKeyDown}
                                onChange={handleTitleChange}
                            />
                        ) : (
                            <span onClick={() => setIsEditTitle(true)}>{title}</span>
                        )}
                    </div>
                    <select
                        value={questionData.type || " "}
                        onChange={(e) => updateQuestionData("type", e.target.value)}
                    >
                        {types.map((e) => (
                            <option key={e}>{e}</option>
                        ))}
                    </select>
                </div>
                <EditorType
                    type={questionData.type}
                    options={options}
                    optionsOperations={optionsOperations}
                    imageOptions={imageOptions}
                    imageOperations={imageOperations}
                    rightAnswer={rightAnswer}
                    onEditRightAsnwer={onEditRightAnswer}
                />
                <div className={s.buttonsContainer}>
                    <button onClick={onSaveQuestion} className={s.saveButton}>
                        Save Question
                    </button>
                    {props.questionsData.length > 1 && (
                        <button onClick={onDeleteQuestion} className={s.deleteButton}>
                            Delete Question
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestEditor;
