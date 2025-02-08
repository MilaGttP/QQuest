import { useAuth0 } from "@auth0/auth0-react";
import s from "./LogoutButton.module.css";


const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className={s.logoutButton}
            onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000" } })}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
