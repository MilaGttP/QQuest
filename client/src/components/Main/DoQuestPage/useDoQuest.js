import {useState} from "react";

function useDoQuest() {
    const [questData, setQuestData] = useState({
        id: 123,
        title: "This is a quest title",
        status: "inactive",
        currentQuestionIndex: 0,
        description: "This is a description",
        type: "Entertainment",
        img: {},
        rating: 9,
        rate: null,
        author: "some_author",
        time: "5 min",
        questions: [
            {
                id: 1,
                type: 'Test',
                text: 'How much will be 2+2?',
                answers: [
                    {id: 1, text: "this is an option"},
                    {id: 2, text: 4},
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
            {
                id: 3,
                type: 'ImageSearch',
                text: 'Find the cat',
                answers: [
                    {id: 1, imgUrl: "https://res.cloudinary.com/qquest/image/upload/v1739043429/cld-sample-4.jpg"},
                    {id: 2, imgUrl: "https://res.cloudinary.com/qquest/image/upload/v1739043429/cld-sample-5.jpg"},
                ],
                rightAnswer: "https://res.cloudinary.com/qquest/image/upload/v1739043429/cld-sample-5.jpg",
            },
        ],
        comments: [
            {id: 1, author: "some_quy01", text: "comment"},
            {id: 2, author: "some_guy", text: "this is a comment"},
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