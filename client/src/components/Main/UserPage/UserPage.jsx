import React, {useEffect, useState} from "react";
import s from "./UserPage.module.css";
import Achievements from "./Achievements/Achievements";
import MyQuests from "./MyQuests/MyQuests";
import UserInfo from "./UserInfo/UserInfo";
import CompletedQuests from "./CompletedQuests/CompletedQuests";
import {useAuth0} from "@auth0/auth0-react";


const UserPage = (props) => {

    const {user, isAuthenticated, isLoading} = useAuth0();
    const [userApiData, setUserApiData] = useState();

    useEffect(() => {
        // getUserInfo(props.user.nickname)
        //     .then(res => setUserApiData(res.data))
        //     .catch(err => console.log(err.message));
    }, []);

    return (
        <div className={s.userPage}>
            <div className={s.userContainer}>
                <UserInfo user={user} userApiData={userApiData}/>
                <Achievements achievements={userApiData?.achievements}/>
            </div>
            <MyQuests defaultQuestsData={props.defaultQuestsData}/>
            <CompletedQuests defaultQuestsData={props.defaultQuestsData}/>
        </div>
    )
}

export default UserPage;