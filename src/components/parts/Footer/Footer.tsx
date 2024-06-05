import style from "./Footer.module.scss"
import {NavLink} from "react-router-dom";

export function Footer() {
    return(
        <div className={style.container}>
            <div>ИП “ДизайнСфера”</div>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Сообщество</NavLink>
            <NavLink to="/">Работа</NavLink>
            <NavLink to="/">Обучение</NavLink>
            <NavLink to="/">Чаты</NavLink>
            <NavLink to="/">Личный кабинет</NavLink>
            <NavLink to="/">Политика конфиденциальности</NavLink>
        </div>
    )
}