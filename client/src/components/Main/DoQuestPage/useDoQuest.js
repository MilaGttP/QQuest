import {useState} from "react";

function useDoQuest() {
    const [questData, setQuestData] = useState({
        id: 123,
        title: "Find sense in your life",
        status: "inactive",
        currentQuestionIndex: 0,
        description: "Find sense in your life and live your best life without depression!",
        type: "Entertainment",
        img: {},
        rating: 9,
        rate: null,
        author: "Lizunnn",
        time: "5 min",
        questions: [
            {
                id: 1,
                type: 'Test',
                text: 'How much will be 2+2?',
                answers: [
                    {id: 1, text: "This is a very very very very big text"},
                    {id: 2, text: 4},
                    {id: 3, text: "This is a very very very very big text This is a very very very very big text This is a very very very very big textThis is a very very very very big text"},
                ],
                rightAnswer: "4",
                selectedAnswer: "",
            },
            {
                id: 2,
                type: 'Opened',
                text: 'How much will be 3+3?',
                answers: [],
                rightAnswer: "6",
            },
        ],
        comments: [
            {id: 1, author: "lizun", text: "i hate my life"},
            {id: 2, author: "some_guy", text: "i hate vntu"},
        ]
    });

    const updateQuestData = (field, value) => {
        setQuestData(prev => ({ ...prev, [field]: value }));
    };

    const setSelectedAnswer = (index, answer) => {
        setQuestData(prev => ({
            ...prev,
            questions: prev.questions.map((q, i) =>
                i === index ? { ...q, selectedAnswer: answer } : q
            ),
        }));
    };

    const addComment = (author, text) => {
        setQuestData(prev => ({
            ...prev,
            comments: [...prev.comments, { id: Date.now(), author, text }],
        }));
    };

    const deleteComment = (commentId) => {
        setQuestData(prev => ({
            ...prev,
            comments: prev.comments.filter(comment => comment.id !== commentId),
        }));
    };

    return {questData, updateQuestData, setSelectedAnswer, addComment, deleteComment};
}

export default useDoQuest;