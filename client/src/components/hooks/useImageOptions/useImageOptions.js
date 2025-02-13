import { useState } from "react";
import {nanoid} from "nanoid";

function useImageOptions(initialOptions = [{ id: 1, text: "", isRight: false }]) {
    const [imageOptions, setImageOptions] = useState(initialOptions);

    const uploadImageToCloudinary = async (file) => {

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");
        formData.append("cloud_name", "qquest");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/qquest/image/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            return data.secure_url; // URL завантаженого зображення
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };

    const onEditImgOption = async (id, file) => {
        if (!file) return;

        const uploadedImage = await uploadImageToCloudinary(file);
        if (!uploadedImage) return;

        setImageOptions((prevOptions) =>
            prevOptions.map(option =>
                option.id === id ? { ...option, text: uploadedImage } : option
            )
        );
    };


    const onImgAddOption = () => {
        setImageOptions(prevOptions => [
            ...prevOptions,
            { id: nanoid(4), text: "", isRight: false }
        ]);
    };

    const onDeleteImgOption = (id) => {
        setImageOptions(prevOptions => prevOptions.filter(option => option.id !== id));
    };

    const onMarkRightImg = (id) => {
        setImageOptions(prevOptions =>
            prevOptions.map(option =>
                option.id === id
                    ? { ...option, isRight: true }
                    : { ...option, isRight: false }
            )
        );
    };

    return { imageOptions, setImageOptions, onImgAddOption, onDeleteImgOption, onMarkRightImg, onEditImgOption };
}

export default useImageOptions;
