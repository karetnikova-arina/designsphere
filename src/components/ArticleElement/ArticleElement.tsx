import style from "./ArticleElement.module.scss"
import {LikeButton} from "../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {SaveButton} from "../buttons/SaveButton/SaveButton.tsx";
import {NotificationWindow} from "../windows/NotificationWindow/NotificationWindow.tsx";

export function ArticleElement({open}: {open: ()=>void}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [notWindow, setNotWindow] = useState(false)
    //const jwt = useSelector((s: RootState) => s.user)
    return (
        <div onClick={open} className={style.container}>
            {notWindow && <NotificationWindow text="Чтобы оценить проект, необходимо авторизоваться" close={()=>setNotWindow(false)}/>}
            <img className={style.image}/>
            <div className={style.info}>
                <div>
                    <div className={style.title}>Title</div>
                    <div className={style.description}>Краткое описание</div>
                </div>
                <div>
                    <div className={style.date}>04.02.2023</div>
                    <div className={style.stats}>
                        <div onClick={(e)=> {
                            e.stopPropagation()
                            setLiked(prev => !prev)
                        }} className={style.stat}>
                            <LikeButton liked={liked}/>
                            <div className={style.stat}>123</div>
                        </div>
                        <div className={style.stat}>
                            <img src="/message.svg"/>
                            <div>123</div>
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