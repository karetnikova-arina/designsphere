import style from "./Error.module.scss"

export function ErrorMessage({text}: {text: string}){
    return(
        <div className={style.error}>
            <img src="/error.svg" alt="Error"/>
            <div>{text}</div>
        </div>
    )
}