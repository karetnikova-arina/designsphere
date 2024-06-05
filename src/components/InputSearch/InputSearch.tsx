import style from "./InputSearch.module.scss"

export function InputSearch() {
    return (
        <div className={style.container}>
            <input className={style.input} placeholder="Поиск"/>
            <img className={style.image} src="/search.svg" alt="Поиск"/>
        </div>
    )
}