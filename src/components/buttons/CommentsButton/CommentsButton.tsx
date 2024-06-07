import style from "./CommentsButton.module.scss"

export function CommentsButton({count}: {count:string | undefined}) {
    return(
        <div className={style.container}>
            <img src="/message.svg"/>
            <div>{count}</div>
        </div>
    )
}