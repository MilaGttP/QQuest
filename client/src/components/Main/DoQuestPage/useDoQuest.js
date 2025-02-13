import {useState} from "react";

function useDoQuest() {
    const [questData, setQuestData] = useState({
        id: 123,
        title: "Title",
        status: "inactive",
        currentQuestionIndex: 0,
        description: "This is a description",
        type: "Entertainment",
        img: {},
        rating: 9,
        rate: null,
        author: "some_author",
        time: "5 min",
        questions: [],
        comments: []
    });

    const updateQuestData = (field, value) => {
        setQuestData(prev => ({ ...prev, [field]: value }));
    };

    const setComments = (newComments) => {
        setQuestData(prev => ({ ...prev, comments: newComments }));
    }

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
            comments: [...prev.comments, { id: Date.now(), email: author, text: text }],
        }));
    };

    const deleteComment = (commentId) => {
        setQuestData(prev => ({
            ...prev,
            comments: prev.comments.filter(comment => comment.id !== commentId),
        }));
    };

    return {questData, updateQuestData, setSelectedAnswer, addComment, deleteComment, setComments};
}

export default useDoQuest;