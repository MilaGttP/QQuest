import React from "react";
import s from "./Test.module.css";

const Test = ({options, operations, ...props}) => {

    return (
        <div className={s.test}>
            <div className={s.title}>Enter answer options for your question:</div>
            {options.map(e =>
                <div className={s.option} key={e.id}>
                    <span
                        className={e.isRight ? s.activeMark : s.mark}
                        onClick={() => operations.onMarkRight(e.id)}
                    ></span>
                    <input
                        type="text"
                        value={e.text}
                        onChange={(event) => operations.onEditOption(e.id, event.target.value)}
                        className={s.input}
                    />
                    <span
                        className={s.delete}
                        onClick={() => operations.onDeleteOption(e.id)}
                    >
                        delete
                    </span>
                </div>
            )}
            <button onClick={operations.onAddOption}>+ Add Option</button>
        </div>
    );
};

export default Test;
