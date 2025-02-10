import {useState} from "react";

function useImageOptions(initialOptions = [{id: 1, image: {}, isRight: false}]) {
    const [imageOptions, setImageOptions] = useState(initialOptions);

    const onImgAddOption = () => {
        setImageOptions(prevOptions => [
            ...prevOptions,
            { id: prevOptions.length + 1, image: {}, isRight: false }
        ]);
    };

    const onDeleteImgOption = (id) => {
        setImageOptions(prevOptions => prevOptions.filter(option => option.id !== id));
    };

    const onMarkRightImg = (id) => {
        setImageOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id
                    ? { ...option, isRight: true }
                    : { ...option, isRight: false }
            )
        );
    };

    const onEditImgOption = (id, newImg) => {
        setImageOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id ? { ...option, img: newImg } : option
            )
        );
    };

    return {imageOptions, setImageOptions, onImgAddOption, onDeleteImgOption, onMarkRightImg, onEditImgOption};
}

export default useImageOptions;