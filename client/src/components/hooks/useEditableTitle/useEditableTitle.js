import { useState } from "react";

function useEditableTitle(initialTitle = "Enter Title") {
    const [title, setTitle] = useState(initialTitle);
    const [isEditTitle, setIsEditTitle] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const onTitleSubmit = () => {
        if (title) {
            setIsEditTitle(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onTitleSubmit();
        }
    };

    return {
        title,
        setTitle,
        isEditTitle,
        setIsEditTitle,
        handleTitleChange,
        handleKeyDown,
        onTitleSubmit,
    };
}

export default useEditableTitle;
