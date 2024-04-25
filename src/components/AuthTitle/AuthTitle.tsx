import style from "./AuthTitle.module.scss"
import {Link} from "react-router-dom";
import {AuthTitleProps} from "./AuthTitleProps.ts";

export function AuthTitle(props: AuthTitleProps) {
    return (
        <div className={style.authTitle}>
            <div className={style.title}>{props.title}</div>
            <div className={style.container}>
                <div className={style.text}>{props.text}</div>
                <Link className={style.link} to={props.link==="Войти"?"/auth/login":"/auth/registration"}>{props.link}</Link>
            </div>
        </div>
    )
}