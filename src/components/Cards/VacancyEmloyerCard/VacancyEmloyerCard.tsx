import {NavLink} from "react-router-dom";
import style from "./VacancyEmloyerCard.module.scss"
import cn from "classnames";
import {VACANCIES} from "../../../data/vacancyEmployer.ts";

export function VacancyEmployerCard(props: typeof VACANCIES[0]) {
    return (
        <NavLink to="/job/vacancy" className={style.container}>
            <div className={style.title}>{props.title}</div>
            <div className={style.salary}>{props.salary}</div>
            <div className={style.row}>
                <div className={style.highlight}>{props.dexperience}</div>
                <div className={style.highlight}>{props.grade}</div>
                <div className={style.highlight}>{props.timetable}</div>
            </div>
            <div className={style.row}>
                <div className={style.nameCompany}>{props.name_company}</div>
                <div className={style.city}>{props.city}</div>
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
                        <div>{props.views}</div>
                    </div>
                    <div className={style.element}>
                        <img src="/saveArt.svg"/>
                        <div>{props.save}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}