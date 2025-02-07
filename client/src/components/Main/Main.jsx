import React from "react";
import s from "./Main.module.css";
import HomePage from "./HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./UserPage/UserPage";


const Main = () => {
    return (
        <div className={s.main}>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/account"} element={<UserPage/>}/>
            </Routes>
        </div>
    )
}

export default Main;