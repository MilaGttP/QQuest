import Test from "../Test/Test";
import Opened from "../Opened/Opened";
import ImageSearch from "../ImageSearch/ImageSearch";
import React from "react";

const EditorType = (props) => {
    switch (props.type) {
        case "Test": return <Test/>;
        case "Opened": return <Opened/>;
        case "Image search": return <ImageSearch/>;
    }
}

export default EditorType;