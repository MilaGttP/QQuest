import React from "react";
import s from "./Main.module.css";
import HomePage from "./HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./UserPage/UserPage";
import CreateQuestPage from "./CreateQuestPage/CreateQuestPage";
import DoQuestPage from "./DoQuestPage/DoQuestPage";
import {useAuth0} from "@auth0/auth0-react";


const Main = () => {

    const {isAuthenticated} = useAuth0();

    return (
        <div className={s.main}>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                {isAuthenticated && <Route path={"/account"} element={<UserPage/>}/>}
                <Route path={"/create"} element={<CreateQuestPage/>}/>
                <Route path={"/quest"} element={<DoQuestPage/>}/>
            </Routes>
        </div>
    )
}

export default Main;