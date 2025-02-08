import { useAuth0 } from "@auth0/auth0-react";
import s from "./LoginButton.module.css";


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className={s.loginButton} onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;