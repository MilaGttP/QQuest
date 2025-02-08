import React from "react";
import s from "./UserPage.module.css";
import Achievements from "./Achievements/Achievements";
import MyQuests from "./MyQuests/MyQuests";
import UserInfo from "./UserInfo/UserInfo";
import CompletedQuests from "./CompletedQuests/CompletedQuests";
import {useAuth0} from "@auth0/auth0-react";


const UserPage = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();

    return (
        <div className={s.userPage}>
            <div className={s.userContainer}>
                <UserInfo user={user}/>
                <Achievements/>
            </div>
            <MyQuests/>
            <CompletedQuests/>
        </div>
    )
}

export default UserPage;