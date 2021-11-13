import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import style from './styles.module.scss'

export function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footer__social}>
            <p>Desenvolvedora de Software - Gabriele Quevedo </p>
                <a href="https://www.linkedin.com/in/gsquevedo/">
                    <FaLinkedin size="30px" color="white" />
                </a>
                <a href="https://github.com/gsquevedo">
                    <FaGithub size="30px" color="white"/>
                </a>
                <a href="https://www.facebook.com/gabriele.quevedo.9/">
                    <FaFacebook size="30px" color="white"/>
                </a>
            </div>
        </footer>
    )
}