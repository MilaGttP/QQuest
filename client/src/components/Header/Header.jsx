import React, {useEffect} from "react";
import s from "./Header.module.css";
import {Link} from "react-router-dom";
import LoginButton from "../common/LoginButton/LoginButton";
import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "../common/LogoutButton/LogoutButton";


const Header = () => {

    const { isLoading, isAuthenticated, user } = useAuth0();

    return (
        <header>
            <div className={s.logo}>
               <Link to={"/"}>QQuest</Link>
            </div>
            {isAuthenticated
                ?
                <div>
                    <Link to={"/account"}>Account</Link>
                    <LogoutButton/>
                </div>
                :
                <div><LoginButton/></div>
            }
        </header>
    )
}

export default Header;