import style from "./ResponseButton.module.scss"
import {ButtonHTMLAttributes} from "react";
import cn from "classnames";
import {useNavigate} from "react-router-dom";

interface ResponseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    response: string
}

export function ResponseButton({response, ...props}: ResponseButton) {
    const navigation = useNavigate()
    return (
        <>
        {response === "invited" ? <div className={style.buttons}>
            <button {...props} className={cn(style.button, style.invited)}>
                <img src="/job_invite.svg"/>
                <div>Вас пригласили</div>
            </button>
            <button onClick={(e)=> {
                e.preventDefault()
                navigation("/chat/job/4")
            }} className={cn(style.button, style.chat)}>
                <img src="/chat_white.svg"/>
                <div>Перейти в чат</div>
            </button>
        </div> : <button {...props} className={cn(style.button, {
            [style.responsed]: response==="responsed"
        })}>
            <img src={response === "responsed" ? "/responsed.svg" : "/response.svg"}/>
            <div>{response === "responsed" ? "Отклик отправлен" : "Откликнуться"}</div>
        </button>
        }
        </>
    )
}