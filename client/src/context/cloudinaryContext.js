import { CloudinaryContext, Image } from "@cloudinary/react";

const CloudinaryProvider = ({ children }) => {
    return (
        <CloudinaryContext cloudName="твій_cloud_name">
            {children}
        </CloudinaryContext>
    );
};

export default CloudinaryProvider;