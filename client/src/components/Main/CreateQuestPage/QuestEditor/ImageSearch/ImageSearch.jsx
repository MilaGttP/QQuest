import React, {useState} from "react";
import s from "./ImageSearch.module.css";


const ImageSearch = () => {

    const [imageOptions, setImageOptions] = useState([
        {id: 1, image: {}, isRight: false},
    ]);

    const onAddOption = () => {
        setImageOptions(prevOptions => [
            ...prevOptions,
            { id: prevOptions.length + 1, image: {}, isRight: false }
        ]);
    };

    const onDeleteOption = (id) => {
        setImageOptions(prevOptions => prevOptions.filter(option => option.id !== id));
    };

    const onMarkRight = (id) => {
        setImageOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id
                    ? { ...option, isRight: true }
                    : { ...option, isRight: false }
            )
        );
    };

    const onEditOption = (id, newImg) => {
        setImageOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id ? { ...option, img: newImg } : option
            )
        );
    };

    return (
        <div className={s.imageSearch}>
            <div className={s.title}>Select images for your answer options: </div>
            {imageOptions.map(e =>
                <div className={s.option} key={e.id}>
                    <span onClick={() => onMarkRight(e.id)} className={e.isRight ? s.activeMark : s.mark}></span>
                    <input onChange={() => onEditOption(e.id)} type={"file"}/>
                    <span onClick={() => onDeleteOption((e.id))} className={s.delete}>delete</span>
                </div>
            )}
            <button onClick={onAddOption}>+ Add Option</button>
        </div>
    )
}

export default ImageSearch;