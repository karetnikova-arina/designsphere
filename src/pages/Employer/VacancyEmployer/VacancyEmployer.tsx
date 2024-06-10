import style from "./VacancyEmployer.module.scss"
import {VacancyEmployerCard} from "../../../components/Cards/VacancyEmloyerCard/VacancyEmloyerCard.tsx";
import {NavLink} from "react-router-dom";
import {VACANCIES} from "../../../data/vacancyEmployer.ts";

export function VacanciesEmployer() {
    return(
        <div className={style.container}>
            <div className={style.vacancy}>
                {VACANCIES.map(el=><VacancyEmployerCard key={el.id} {...el}/>)}
            </div>
            <NavLink to="/vacancy/create" className={style.button}><img src="/plus.svg"/><div></div>Создать вакансию</NavLink>
        </div>
    )
}