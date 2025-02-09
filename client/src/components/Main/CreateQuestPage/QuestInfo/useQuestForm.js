import {useEffect, useState} from "react";

function useQuestForm(initialTitle) {
    const [questInfo, setQuestInfo] = useState({
        title: initialTitle,
        type: "Type",
        time: 'Time',
        description: '',
        img: null,
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
        console.log("Saved Quest Info:", questInfo);
    }

    return {questInfo, updateQuestInfo, handleFileChange, onSaveQuest};
}

export default useQuestForm;