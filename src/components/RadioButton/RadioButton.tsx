import style from "./RadioButton.module.scss"

export function RadioButton({title}: {title: string}) {
    return (
        <div className={style.container}>
            <input className={style.input} id={title} type="radio" name="radio"/>
            <label className={style.label} htmlFor={title}>{title}</label>
        </div>
    )
}