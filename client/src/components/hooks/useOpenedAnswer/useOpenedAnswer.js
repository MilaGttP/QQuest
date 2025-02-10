import {useState} from "react";

function useOpenedAnswer(initialAnswer = "") {
    const [rightAnswer, setRightAnswer] = useState(initialAnswer);

    const onEditRightAnswer = (event) => {
        setRightAnswer(event.target.value);
    }

    return {rightAnswer, setRightAnswer, onEditRightAnswer};
}

export default useOpenedAnswer;