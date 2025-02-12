import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

function useQuestForm(initialTitle, initialQuestions = {}) {
    const [questInfo, setQuestInfo] = useState({
        title: initialTitle,
        type: "",
        time: '',
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

    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default"); // Замініть на ваш upload preset

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/qquest/image/upload", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            return data.secure_url; // URL завантаженого зображення
        } catch (error) {
            console.error("Помилка завантаження зображення:", error);
            return null;
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const uploadedImageUrl = await uploadImageToCloudinary(file);
        console.log(uploadedImageUrl);
        if (uploadedImageUrl) {
            updateQuestInfo("img", uploadedImageUrl);
        }
    };

    const onSaveQuest = () => {
        const areRightsAnswers = !questInfo.questions.filter(e => !e.rightAnswer).length;
        const isQuestInfo = questInfo.title && questInfo.description && questInfo.time && questInfo.questions && questInfo.type;

        if (areRightsAnswers && isQuestInfo) {
            console.log("Saved Quest Info:", {nanoId: nanoid(6), ...questInfo});
        } else {
            console.log("no right answers or not all info");
            alert("Add right answers to ALL questions and fill ALL fields before saving quest.");
        }
    }

    return {questInfo, updateQuestInfo, handleFileChange, onSaveQuest};
}

export default useQuestForm;