import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import {createQuest} from "../../../../api";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

function useQuestForm(initialTitle, initialQuestions = {}) {

    const {user} = useAuth0();
    const navigate = useNavigate();

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

    const onSaveQuest = async () => {
        const areRightsAnswers = !questInfo.questions.filter(e => !e.rightAnswer).length;
        const isQuestInfo = questInfo.title && questInfo.description && questInfo.time && questInfo.questions && questInfo.type;

        const quest = {nanoId: nanoid(6), ...questInfo};

        if (areRightsAnswers && isQuestInfo) {
            await createQuest({
                nanoId: nanoid(6),
                email: user.email,
                ...questInfo
            }).then(res => {
                navigate('/account');
                console.log(res);
            });
        } else {
            console.log("no right answers or not all info");
            alert("Add right answers to ALL questions and fill ALL fields before saving quest.");
        }
    }

    return {questInfo, updateQuestInfo, handleFileChange, onSaveQuest};
}

export default useQuestForm;