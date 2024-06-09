import style from "./InputSearchFilters.module.scss"
import cn from "classnames";
import {useState} from "react";
import {CommunitiesFriendsFilters} from "../CommunitiesFriendsFilters/CommunitiesFriendsFilters.tsx";
import {useLocation} from "react-router-dom";
import {CommunitiesGroupFilters} from "../CommunitiesGroupFilters/CommunitiesGroupFilters.tsx";

export function InputSearchFilters() {
    const [inputFocus, setInputFocus] = useState(false);
    const [filters, setFilters] = useState(false)
    const location = useLocation()
    return(
        <div className={style.inputSearch}>
            {filters && (location.pathname.includes("friends") ? <CommunitiesFriendsFilters/> : <CommunitiesGroupFilters/>)}
            <input onFocus={()=> setInputFocus(true)}
                   onBlur={()=> setInputFocus(false)} className={style.input} placeholder ={location.pathname.includes("friends") ? "Поиск друзей" : (location.pathname.includes("group") ? "Поиск групп" : "Поиск кандидатов")}/>
            <div className={style.element}>
                {!location.pathname.includes("/candidate") && <button onClick={() => setFilters(prevState => !prevState)} className={cn(style.filter, {
                    [style.focusFilter]: inputFocus
                })}>
                    <div>{location.pathname.includes("group") ? "Фильтр" : "Параметры"}</div>
                    <svg className={cn(style.arrowTransform, {[style.arrow]: filters})} width="20" height="11"
                         viewBox="0 0 20 11" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 1.25L10 10L1.25 1.25" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>}
                <button className={cn(style.search, {
                    [style.focusButton]: inputFocus
                })}><img src="/search1.svg"/></button>
            </div>
        </div>
    )
}