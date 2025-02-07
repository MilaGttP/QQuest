import React from "react";
import s from "./UserInfo.module.css";
import cat from "../../../../img/cat.png";


const UserInfo = () => {
    return (
        <div className={s.userInfo}>
            <div className={s.avatar}>
                <img src={cat}/>
                <div className={s.rating}>Rating: #1</div>
            </div>
            <div className={s.info}>
                <div className={s.name}>Yelyzaveta Novikova</div>
                <div className={s.email}>yelyzavetanov@gmail.com</div>
                <div className={s.status}>I am a student at vntu and a full stack developer.</div>
                <div className={s.score}>Score: <span>100000</span></div>
                <div className={s.quests}>Quests created: <span>10</span></div>
            </div>
        </div>
    )
}

export default UserInfo;