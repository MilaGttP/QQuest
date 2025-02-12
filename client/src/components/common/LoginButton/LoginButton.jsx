import { useAuth0 } from "@auth0/auth0-react";
import s from "./LoginButton.module.css";


const LoginButton = () => {
    const { loginWithRedirect, user } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect();
        console.log("user: ", user)
    }

    return <button className={s.loginButton} onClick={handleLogin}>Login</button>;
};

export default LoginButton;