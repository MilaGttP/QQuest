import React from "react";
import s from "./ImageSearch.module.css";


const ImageSearch = ({options, operations, ...props}) => {

       return (
        <div className={s.imageSearch}>
            <div className={s.title}>Select images for your answer options: </div>
            {options.map(e =>
                <div className={s.option} key={e.id}>
                    <span
                        onClick={() => operations.onMarkRightImg(e.id)}
                        className={e.isRight ? s.activeMark : s.mark}
                    ></span>
                    <input
                        onChange={() => operations.onEditImgOption(e.id)}
                        type={"file"}
                        accept={"image/*"}
                    />
                    <span
                        onClick={() => operations.onDeleteImgOption((e.id))}
                        className={s.delete}
                    >
                        delete
                    </span>
                </div>
            )}
            <button onClick={operations.onImgAddOption}>+ Add Option</button>
        </div>
    )
}

export default ImageSearch;