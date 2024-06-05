import style from "./Video.module.scss"
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {PopupWindow} from "../../windows/PopupWindow/PopupWindow.tsx";
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {CommentsButton} from "../../buttons/CommentsButton/CommentsButton.tsx";
import cn from "classnames";
import {Comments} from "../../Comments/Comments.tsx";

export function VideoArticle({close, type}: { close: () => void, type: string }) {
    const [window, setWindow] = useState(false)
    const {jwt} = useSelector((s: RootState) => s.user)
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    return (
        <>
            {window && <NotificationWindow text="Чтобы подписаться, необходимо авторизоваться"
                                           close={() => setWindow(false)}/>}
            <PopupWindow close={close}>
                <div className={style.top}>
                    <img className={cn({
                        [style.imageArticle]: type === "article",
                        [style.imageVideo]: type === "video",
                    })}/>
                    <div className={style.info}>
                        <div className={style.title}>Title</div>
                        <div className={style.description}>nfghfdjgkjdghkdghdjgdfjkghdkjghfdgkdhg</div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.nikname}>
                        <div onClick={() => {
                            if (jwt) setSaved(prevState => !prevState)
                        }}>
                            <SaveButton saved={saved}/>
                        </div>
                        <div onClick={() => {
                            if (jwt) setLiked(prevState => !prevState)
                        }} className={style.likes}>
                            <LikeButton liked={liked}/>
                            <div>123</div>
                        </div>
                        <CommentsButton/>
                        <button className={style.send}><img src="/send.svg"/></button>
                    </div>
                    <div className={style.date}>01.04.2024</div>
                </div>
                <Comments/>
            </PopupWindow>
        </>
    )
}