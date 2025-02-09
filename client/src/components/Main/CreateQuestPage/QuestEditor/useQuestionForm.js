import {useState} from "react";

function useQuestionForm(initialType) {
    const [questionData, setQuestionData] = useState({
        type: initialType,
        answers: [],
        rightAnswer: "",
    });

    const updateQuestionData = (field, value) => {
        setQuestionData(prev => ({ ...prev, [field]: value }));
    };

    return {questionData, updateQuestionData};
}

export default useQuestionForm;