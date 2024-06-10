import style from "./Footer.module.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";

export function Footer() {
    const {values} = useSelector((s: RootState) => s.form)
    return (
        <div className={style.container}>
            <div>ИП “ДизайнСфера”</div>
            {values.person !== "Работодатель" && <>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/communities/friends">Сообщество</NavLink>
                <NavLink to="/education">Обучение</NavLink>
                <NavLink to="/job">Работа</NavLink>
            </>
            }
            {values.person === "Работодатель" && <>
                <NavLink to="/vacancy">Вакансии</NavLink>
                <NavLink to="/candidate">Кандидаты</NavLink>
            </>
            }
            <NavLink to="/chat">Чаты</NavLink>
            <NavLink to={values.person !== "Работодатель" ? "/personalaccount" : "/vacancy"}>Личный кабинет</NavLink>
            <NavLink to="/">Политика конфиденциальности</NavLink>
            <NavLink to="/">Поддержка</NavLink>
        </div>
    )
}