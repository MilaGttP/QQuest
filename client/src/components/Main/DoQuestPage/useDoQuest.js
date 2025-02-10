import {useState} from "react";

function useDoQuest() {
    const [questData, setQuestData] = useState({
        id: 123,
        title: "Find sense in your life",
        status: "inactive",
        description: "Find sense in your life and live your best life without depression!",
        type: "Entertainment",
        img: {},
        rating: 9,
        author: "Lizunnn",
        time: "2 min",
        questions: [
            {
                id: 1,
                type: 'Test',
                text: 'How mush will be 2+2?',
                answers: [{id: 1, text: 2}, {id: 2, text: 4}],
                rightAnswer: "4",
            },
            {
                id: 2,
                type: 'Opened',
                text: 'How mush will be 3+3?',
                answers: [],
                rightAnswer: "6",
            },
        ],
    });

    const updateQuestData = (field, value) => {
        setQuestData(prev => ({ ...prev, [field]: value }));
    };

    return {questData, updateQuestData};
}

export default useDoQuest;