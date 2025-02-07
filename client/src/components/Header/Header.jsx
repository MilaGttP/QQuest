import React from "react";
import s from "./Header.module.css";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className={s.logo}>
               <Link to={"/"}>QQuest</Link>
            </div>
            <div>
                <Link to={"/account"}>Account</Link>
            </div>
        </header>
    )
}

export default Header;