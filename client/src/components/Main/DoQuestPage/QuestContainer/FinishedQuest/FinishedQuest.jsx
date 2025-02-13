import React, {useEffect} from "react";
import s from "./FinishedQuest.module.css";
import {completeQuest} from "../../../../../api";
import {useAuth0} from "@auth0/auth0-react";


const FinishedQuest = (props) => {

    const {user} = useAuth0();

    const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleRestart = () => {
        props.updateQuestData("status", "active");
        props.updateQuestData("currentQuestionIndex", 0);
    }

    const questionsAmount = props.questData.questions.length;

    const rightAnswers = props.questData.questions.filter(
        e => e?.rightAnswer?.toString() === e?.selectedAnswer?.toString()
    ).length;

    useEffect(() => {

        console.log("finished: ", props.questData, user.email);

        completeQuest({
            nanoId: props.questData.id,
            email: user.email
        }).then(res => console.log(res));
    }, []);

    const handleRate = (rate) => {
        props.updateQuestData("rate", rate);
    }

    return (
        <div className={s.finished}>
            <div className={s.title}>Quest Completed!</div>
            <div className={s.score}>Score:
                <span className={s.answers}>{rightAnswers}/{questionsAmount}</span>
            </div>
            <div className={s.rates}>
                <div className={s.ratesTitle}>Rate this Quest:</div>

                {rates.map(e =>
                    <span
                        className={props.questData.rate === e ? s.selectedRate : s.rate}
                        key={e}
                        onClick={event => handleRate(e)}
                    >{e}</span>
                )}
            </div>
            <button onClick={handleRestart} className={s.restartButton}>Restart!</button>
        </div>
    )
}

export default FinishedQuest;