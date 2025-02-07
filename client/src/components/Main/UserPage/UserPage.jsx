import React from "react";
import s from "./UserPage.module.css";
import Achievements from "./Achievements/Achievements";
import MyQuests from "./MyQuests/MyQuests";
import UserInfo from "./UserInfo/UserInfo";
import CompletedQuests from "./CompletedQuests/CompletedQuests";


const UserPage = () => {
    return (
        <div className={s.userPage}>
            <div className={s.userContainer}>
                <UserInfo/>
                <Achievements/>
            </div>
            <MyQuests/>
            <CompletedQuests/>
        </div>
    )
}

export default UserPage;