import React, {useState} from "react";
import s from "./ActiveQuestion.module.css";


const ActiveQuestion = ({question, setSelectedAnswer, ...props}) => {

    const selectedAnswer = question?.selectedAnswer;
    const [openedAnswer, setOpenedAnswer] = useState("");

    const handleSelectAnswer = (text) => {
        setSelectedAnswer(props.currentQuestionIndex, text);
    }

    // console.log("split: ", question.answers.split(";"));

    const handleNext = () => {

        const nextQuestionIndex = props.currentQuestionIndex + 1;

        if ((selectedAnswer || openedAnswer) && props.questLength > nextQuestionIndex) {
            props.updateQuestData("currentQuestionIndex", nextQuestionIndex);
        } else if ((selectedAnswer || openedAnswer) && props.questLength === nextQuestionIndex) {
            props.updateQuestData("status", "finished");
        } else {
            alert("Give your answer before going to next question!");
        }
    }

    const handleOpenedAnswerChange = (event) => {
        setOpenedAnswer(event.target.value);
        setSelectedAnswer(props.currentQuestionIndex, event.target.value.toString());
    }

    return (
        <div className={s.activeQuestion}>
            <div className={s.title}>{question.title}</div>
            {question.type === "Test" && question.answers.length &&
                <div className={s.answers}>
                    {question.answers.split(";").map(e =>
                        <div className={s.answer}>
                            <span
                                className={selectedAnswer === e ? s.selectedCheckbox : s.checkbox}
                                onClick={() => handleSelectAnswer(e)}
                            ></span>
                            {e}
                        </div>
                    )}
                </div>
            }
            {question.type === "Opened" &&
                <div className={s.openedAnswer}>
                    <div className={s.openedTitle}>Write your answer here:</div>
                    <input
                        value={openedAnswer}
                        onChange={(event) => handleOpenedAnswerChange(event)}
                        placeholder={"Your answer..."}
                    />
                </div>
            }
            {question.type === "ImageSearch" &&
                <div className={s.imageSearch}>
                    {question.answers.split(";").map(e =>
                        <div className={s.imgAnswer}>
                            <span
                                className={selectedAnswer === e ? s.selectedCheckbox : s.checkbox}
                                onClick={() => handleSelectAnswer(e)}
                            ></span>
                            <img src={e}/>
                        </div>
                    )}
                </div>
            }
            <div className={s.buttonContainer}>
                <button onClick={handleNext} className={s.nextButton}>Next</button>
            </div>
        </div>
    )
}

export default ActiveQuestion;