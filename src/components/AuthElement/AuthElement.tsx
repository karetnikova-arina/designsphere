import style from "./AuthElement.module.scss"
import {AuthElementProps} from "./AuthElementProps.ts";

export function AuthElement({title, children}: AuthElementProps) {
    return(
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            {children}
        </div>
    )
}