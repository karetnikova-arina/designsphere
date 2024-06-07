import style from "./Job.module.scss"
import {VacancyCard} from "../../../components/Cards/VacancyCard/VacancyCard.tsx";
import {useState} from "react";
import cn from "classnames";
import {JobFilters} from "../../../components/Filters/JobFilters/JobFilters.tsx";
import {RABOTA} from "../../../data/6rabota.ts";
import {RABOTA_OTKLIK} from "../../../data/7rabota_otkliki.ts";
import {RABOTA_PRIGLASHENIE} from "../../../data/8rabota_priglasheniya.ts";
import {RABOTA_SAVE} from "../../../data/9rabota_save.ts";

export function Job() {
    const [inputFocus, setInputFocus] = useState(false);
    const [filter, setFilter] = useState('')

    return (
        <div className={style.container}>
            <JobFilters value={filter} setValue={setFilter}/>
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
                {filter==="" && RABOTA.map(el=><VacancyCard save={false} button="response" props={el}/>)}
                {filter==="response" && RABOTA_OTKLIK.map(el=><VacancyCard save={false} button="responsed" props={el}/>)}
                {filter==="invite" && RABOTA_PRIGLASHENIE.map(el=><VacancyCard save={false} button="invited" props={el}/>)}
                {filter==="save" && RABOTA_SAVE.map(el=><VacancyCard save={true} button="response" props={el}/>)}
            </div>
        </div>
    )
}