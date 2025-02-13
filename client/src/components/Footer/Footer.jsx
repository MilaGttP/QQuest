import React from "react";
import s from "./Footer.module.css";


const Footer = () => {
    return (
        <footer>Проєкт зроблений частиною команди веселих чєліків які також розробили
            <a className={s.link} href={"https://politehmap.com.ua"}>мапу ВНТУ</a>!
        </footer>
    )
}

export default Footer;