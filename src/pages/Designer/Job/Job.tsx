import style from "./Job.module.scss"
import {VacancyCard} from "../../../components/Cards/VacancyCard/VacancyCard.tsx";
import {useState} from "react";
import cn from "classnames";
import {JobFilters} from "../../../components/Filters/JobFilters/JobFilters.tsx";

export function Job() {
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className={style.container}>
            <JobFilters/>
            <div className={style.inputSearch}>
                <input onFocus={()=> setInputFocus(true)}
                       onBlur={()=> setInputFocus(false)} className={style.input} placeholder="Поиск друзей"/>
                <div className={style.element}>
                    <button className={cn(style.search, {
                        [style.focusButton]: inputFocus
                    })}><img src="/search1.svg"/></button>
                </div>
            </div>
            <div className={style.content}>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </div>
        </div>
    )
}