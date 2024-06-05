import style from "./LikeButton.module.scss"

export function LikeButton({liked}: {liked: boolean}) {
    return(
        <button className={style.button}>
            <img src={liked ? "/liked.svg" :"/like.svg"}/>
        </button>
    )
}