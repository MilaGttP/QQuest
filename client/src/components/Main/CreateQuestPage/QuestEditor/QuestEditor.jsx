import React from "react";
import s from "./QuestEditor.module.css";


const QuestEditor = () => {
    return (
        <div className={s.editor}>
            <div className={s.editorHeader}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.editorContainer}>
                quest editor
            </div>
        </div>
    )
}

export default QuestEditor;