import style from "./ArticleElement.module.scss"
import {LikeButton} from "../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {SaveButton} from "../buttons/SaveButton/SaveButton.tsx";
import {NotificationWindow} from "../windows/NotificationWindow/NotificationWindow.tsx";
import {OBUCHENIE_STATYA_INTERFACE} from "../../data/5obuchenie.ts";

export function ArticleElement({open, props}: {open: ()=>void, props: OBUCHENIE_STATYA_INTERFACE}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [notWindow, setNotWindow] = useState(false)
    //const jwt = useSelector((s: RootState) => s.user)
    return (
        <div onClick={open} className={style.container}>
            {notWindow && <NotificationWindow text="Чтобы оценить проект, необходимо авторизоваться" close={()=>setNotWindow(false)}/>}
            <img src={`images/${props.photo}.jpg`} className={style.image}/>
            <div className={style.info}>
                <div>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.description}>{props.description}</div>
                </div>
                <div>
                    <div className={style.date}>{props.data}</div>
                    <div className={style.stats}>
                        <div onClick={(e)=> {
                            e.stopPropagation()
                            setLiked(prev => !prev)
                        }} className={style.stat}>
                            <LikeButton liked={liked}/>
                            <div className={style.stat}>{props.likes}</div>
                        </div>
                        <div className={style.stat}>
                            <img src="/message.svg"/>
                            <div>{props.comments}</div>
                        </div>
                        <div onClick={(e)=> {
                            e.stopPropagation()
                            setSaved(prev => !prev)
                        }}>
                            <SaveButton saved={saved}/>
                        </div>
                        <img src="/send.svg"/>
                        <img src="/points.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}