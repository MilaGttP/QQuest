import {useState, useEffect} from "react";
import s from "./Timer.module.css";

const Timer = ({minutes, onTimeUp}) => {
    const [timeLeft, setTimeLeft] = useState(minutes * 60);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (onTimeUp) {
                onTimeUp();
            }
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div>
            Time left:
            <span className={s.time}>{timeLeft > 0 ? formatTime(timeLeft) : "No Time Left!"}</span>
        </div>
    );
};

export default Timer;