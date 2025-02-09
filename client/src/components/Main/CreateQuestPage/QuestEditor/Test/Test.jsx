import React, { useState } from "react";
import s from "./Test.module.css";

const Test = () => {
    const [options, setOptions] = useState([
        {
            id: 1,
            text: "Answer option",
            isRight: false,
        }
    ]);

    const onAddOption = () => {
        setOptions(prevOptions => [
            ...prevOptions,
            { id: prevOptions.length + 1, text: "Answer option", isRight: false }
        ]);
    };

    const onDeleteOption = (id) => {
        setOptions(prevOptions => prevOptions.filter(option => option.id !== id));
    };

    const onMarkRight = (id) => {
        setOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id
                    ? { ...option, isRight: true }
                    : { ...option, isRight: false }
            )
        );
    };

    const onEditOption = (id, newText) => {
        setOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id ? { ...option, text: newText } : option
            )
        );
    };

    return (
        <div className={s.test}>
            <div className={s.title}>Enter answer options for your question:</div>
            {options.map(e =>
                <div className={s.option} key={e.id}>
                    <span
                        className={e.isRight ? s.activeMark : s.mark}
                        onClick={() => onMarkRight(e.id)}
                    ></span>
                    <input
                        type="text"
                        value={e.text}
                        onChange={(event) => onEditOption(e.id, event.target.value)}
                        className={s.input}
                    />
                    <span
                        className={s.delete}
                        onClick={() => onDeleteOption(e.id)}
                    >
                        delete
                    </span>
                </div>
            )}
            <button onClick={onAddOption}>+ Add Option</button>
        </div>
    );
};

export default Test;
