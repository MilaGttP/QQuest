import React from "react";
import s from "./Main.module.css";
import HomePage from "./HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./UserPage/UserPage";
import CreateQuestPage from "./CreateQuestPage/CreateQuestPage";


const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/account"} element={<UserPage/>}/>
                <Route path={"/create"} element={<CreateQuestPage/>}/>
            </Routes>
        </div>
    )
}

export default Main;