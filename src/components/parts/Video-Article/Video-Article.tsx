import style from "./Video.module.scss"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {PopupWindow} from "../../windows/PopupWindow/PopupWindow.tsx";
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {CommentsButton} from "../../buttons/CommentsButton/CommentsButton.tsx";
import cn from "classnames";
import {Comments} from "../../Comments/Comments.tsx";
import {
    PROSMOTR_STATYA,
    PROSMOTR_STATYA_COMMENTS,
    PROSMOTR_VIDEO,
    PROSMOTR_VIDEO_COMMENTS
} from "../../../data/10prosmotr.ts";

export function VideoArticle({close, type}: { close: () => void, type: string }) {
    const [window, setWindow] = useState(false)
    const {jwt} = useSelector((s: RootState) => s.user)
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [data, setData] = useState<typeof PROSMOTR_VIDEO>()
    const [comments, setComments] = useState<typeof PROSMOTR_STATYA_COMMENTS>([])

    useEffect(()=>{
        if(type === "article") {
            setData(PROSMOTR_STATYA)
            setComments(PROSMOTR_STATYA_COMMENTS)
        }
        if(type === "video") {
            setData(PROSMOTR_VIDEO)
            setComments(PROSMOTR_VIDEO_COMMENTS)
        }
    },[])
    return (
        <>
            {window && <NotificationWindow text="Чтобы подписаться, необходимо авторизоваться"
                                           close={() => setWindow(false)}/>}
            <PopupWindow close={close}>
                <div className={style.top}>
                    <img src={`/images/${data?.photo}.jpg`} className={cn({
                        [style.imageArticle]: type === "article",
                        [style.imageVideo]: type === "video",
                    })}/>
                    <div className={style.info}>
                        <div className={style.title}>{data?.title}</div>
                        <div className={style.description}>{data?.description}</div>
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
                            <div>{data?.likes}</div>
                        </div>
                        <CommentsButton count={data?.comments}/>
                        <button className={style.send}><img src="/send.svg"/></button>
                    </div>
                    <div className={style.date}>{data?.data}</div>
                </div>
                <Comments comments={comments}/>
            </PopupWindow>
        </>
    )
}