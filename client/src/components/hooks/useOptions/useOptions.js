import {useState} from "react";
import {nanoid} from "nanoid";

function useOptions(initialOptions = [{id: 1, text: "Answer option", isRight: false,}]) {

    const [options, setOptions] = useState(initialOptions);

    const onAddOption = () => {
        setOptions(prevOptions => [
            ...prevOptions,
            { id: nanoid(4), text: "Answer option", isRight: false }
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

    return {options, setOptions, onAddOption, onDeleteOption, onMarkRight, onEditOption};
}

export default useOptions;