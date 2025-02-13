import React, {useEffect, useState} from "react";
import s from "./UserPage.module.css";
import Achievements from "./Achievements/Achievements";
import MyQuests from "./MyQuests/MyQuests";
import UserInfo from "./UserInfo/UserInfo";
import CompletedQuests from "./CompletedQuests/CompletedQuests";
import {useAuth0} from "@auth0/auth0-react";
import {useApiUser} from "../../../context/apiUserContext";
import {fetchAchievements, fetchCompletedQuests, fetchCreatedQuests} from "../../../api";


const UserPage = (props) => {

    const {user, isAuthenticated, isLoading} = useAuth0();
    const { userApiData, updateUserApiData } = useApiUser();

    const [myQuests, setMyQuests] = useState([]);
    const [completedQuests, setCompletedQuests] = useState([]);
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {

        fetchCreatedQuests(user.email).then(res => setMyQuests(res));
        fetchCompletedQuests(user.email).then(res => setCompletedQuests(res));
        fetchAchievements(user.email).then(res => setAchievements(res));

    }, []);

    return (
        <div className={s.userPage}>
            <div className={s.userContainer}>
                <UserInfo
                    user={user}
                    userApiData={userApiData}
                    updateUserApiData={updateUserApiData}
                />
                <Achievements achievements={achievements}/>
            </div>
            <MyQuests
                doQuest={props.doQuest}
                defaultQuestsData={props.defaultQuestsData}
                myQuests={myQuests}
            />
            <CompletedQuests
                doQuest={props.doQuest}
                defaultQuestsData={props.defaultQuestsData}
                completedQuests={completedQuests}
            />
        </div>
    )
}

export default UserPage;