import Test from "../Test/Test";
import Opened from "../Opened/Opened";
import ImageSearch from "../ImageSearch/ImageSearch";
import React from "react";

const EditorType = (props) => {
    switch (props.type) {
        case "Test": return <Test options={props.options} operations={props.optionsOperations}/>;
        case "Opened": return <Opened rightAnswer={props.rightAnswer} onEditRightAnswer={props.onEditRightAsnwer}/>;
        case "Image search": return <ImageSearch options={props.imageOptions} operations={props.imageOperations}/>;
    }
}

export default EditorType;