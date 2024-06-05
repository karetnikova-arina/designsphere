import style from "./Back.module.scss"
import {NavLink} from "react-router-dom";

export function Back({path}: {path: string}) {
    return(
        <NavLink className={style.back} to={path}>
            <img src="/back.svg"/>
            <div>Вернуться назад</div>
        </NavLink>
    )
}