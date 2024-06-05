import style from "./ResponseButton.module.scss"
import {ButtonHTMLAttributes} from "react";
import cn from "classnames";

interface ResponseButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    response: boolean
}
export function ResponseButton({response, ...props}: ResponseButton) {
    return(
        <button {...props} className={cn(style.button, {
            [style.responsed]: response
        })}>
            <img src={response ? "/responsed.svg": "/response.svg"}/>
            <div>{response ? "Отклик отправлен": "Откликнуться"}</div>
        </button>
    )
}