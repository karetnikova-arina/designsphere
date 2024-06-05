import {NavLink} from "react-router-dom";
import style from "./VacancyEmloyerCard.module.scss"
import cn from "classnames";

export function VacancyEmployerCard() {
    return (
        <NavLink to="/job/vacancy" className={style.container}>
            <div className={style.title}>Title</div>
            <div className={style.salary}>Salary</div>
            <div className={style.row}>
                <div className={style.highlight}>Опыт работы</div>
                <div className={style.highlight}>Грейд</div>
                <div className={style.highlight}>График работы</div>
            </div>
            <div className={style.row}>
                <div className={style.nameCompany}>Название компании</div>
                <div className={style.city}>Город</div>
            </div>
            <div className={style.footer}>
                <NavLink to="/vacancyreduction">
                    <button className={style.button}>
                        <img src="/pencilWhite.svg"/>
                        <div>Редактировать</div>
                    </button>
                </NavLink>
                <div className={cn(style.element, style.allelements)}>
                    <div className={style.element}>
                        <img src="/eye_small.svg"/>
                        <div>123</div>
                    </div>
                    <div className={style.element}>
                        <img src="/saveArt.svg"/>
                        <div>123</div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}