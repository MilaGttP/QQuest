import {useEffect, useState} from "react";

function useQuestForm(initialTitle, initialQuestions = {}) {
    const [questInfo, setQuestInfo] = useState({
        title: initialTitle,
        type: "Type",
        time: 'Time',
        description: '',
        img: null,
        questions: initialQuestions,
    });

    useEffect(() => {
        setQuestInfo((prev) => ({ ...prev, title: initialTitle }));
    }, [initialTitle]);

    const updateQuestInfo = (field, value) => {
        setQuestInfo(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        updateQuestInfo("img", file);
    };

    const onSaveQuest = () => {
        const areRightsAnswers = !questInfo.questions.filter(e => !e.rightAnswer).length;

        if (areRightsAnswers) {
            console.log("Saved Quest Info:", questInfo);
        } else {
            console.log("no right answers go fuck yourself");
            alert("Add right answers to ALL questions before saving quest.");
        }
    }

    return {questInfo, updateQuestInfo, handleFileChange, onSaveQuest};
}

export default useQuestForm;