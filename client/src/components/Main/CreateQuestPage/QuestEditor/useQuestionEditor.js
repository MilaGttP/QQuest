import { useEffect } from "react";
import useEditableTitle from "../../../hooks/useEditableTitle/useEditableTitle";
import useOptions from "../../../hooks/useOptions/useOptions";
import useImageOptions from "../../../hooks/useImageOptions/useImageOptions";
import useOpenedAnswer from "../../../hooks/useOpenedAnswer/useOpenedAnswer";
import useQuestionForm from "./useQuestionForm";

function useQuestionEditor(props) {
    const { currentQuestion, setCurrentQuestion, questionsData, setQuestionsData, questionIndex } = props;

    const {
        title, setTitle, isEditTitle, setIsEditTitle, handleTitleChange, handleKeyDown
    } = useEditableTitle(currentQuestion.text);

    const { options, setOptions, onEditOption, onMarkRight, onDeleteOption, onAddOption } = useOptions(currentQuestion?.answers);
    const optionsOperations = { onEditOption, onMarkRight, onDeleteOption, onAddOption };

    const { imageOptions, setImageOptions, onImgAddOption, onDeleteImgOption, onMarkRightImg, onEditImgOption } = useImageOptions(currentQuestion?.answers);
    const imageOperations = { onImgAddOption, onDeleteImgOption, onMarkRightImg, onEditImgOption };

    const { rightAnswer, setRightAnswer, onEditRightAnswer } = useOpenedAnswer(currentQuestion?.rightAnswer);

    const { questionData, updateQuestionData } = useQuestionForm(currentQuestion.type);

    useEffect(() => {
        setTitle(currentQuestion.text);
        updateQuestionData("type", currentQuestion.type);
        updateQuestionData("answers", currentQuestion?.answers);

        setOptions(currentQuestion?.answers || []);
        setRightAnswer(currentQuestion?.rightAnswer || null);
        setImageOptions(currentQuestion?.answers || []);
    }, [currentQuestion]);

    const onSaveQuestion = () => {
        let answers;
        let right;

        switch (questionData.type) {
            case "Test":
                answers = options;
                right = answers.find(e => e.isRight)?.text || "";
                break;
            case "Opened":
                answers = [];
                right = rightAnswer;
                break;
            case "ImageSearch":
                answers = imageOptions;
                right = answers.find(e => e.isRight).text || "";
                // console.log(answers, right);
                break;
            default:
                return;
        }

        const updatedQuestionsData = questionsData.map((question, index) =>
            index === questionIndex
                ? {
                    ...question,
                    text: title,
                    type: questionData.type,
                    answers: answers,
                    rightAnswer: right,
                }
                : question
        );

        setQuestionsData(updatedQuestionsData);
        setCurrentQuestion(updatedQuestionsData[questionIndex]);
    };

    const onDeleteQuestion = () => {
        const updatedQuestionsData = questionsData.filter((_, index) => index !== questionIndex);
        setQuestionsData(updatedQuestionsData);

        const newIndex = Math.max(0, questionIndex - 1);
        setCurrentQuestion(updatedQuestionsData.length > 0 ? updatedQuestionsData[newIndex] : null);
    };

    return {
        title,
        setTitle,
        isEditTitle,
        setIsEditTitle,
        handleTitleChange,
        handleKeyDown,
        questionData,
        updateQuestionData,
        options,
        optionsOperations,
        imageOptions,
        imageOperations,
        rightAnswer,
        onEditRightAnswer,
        onSaveQuestion,
        onDeleteQuestion,
    };
}

export default useQuestionEditor;
