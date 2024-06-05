import style from "./ProjectInAccount.module.scss"
import {SaveButton} from "../buttons/SaveButton/SaveButton.tsx";
import {LikeButton} from "../buttons/LikeButton/LikeButton.tsx";
import {CommentsButton} from "../buttons/CommentsButton/CommentsButton.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {PopupWindow} from "../windows/PopupWindow/PopupWindow.tsx";
import {ButtonSubscribe} from "../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {Comments} from "../Comments/Comments.tsx";

export function ProjectInAccount({close}: {close: ()=>void}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const {jwt} = useSelector((s: RootState) => s.user)

    return(
        <PopupWindow close={close}>
            <div className={style.container}>
                <div className={style.topPart}>
                    <img className={style.image}/>
                    <div className={style.info}>
                        <div className={style.title}>Title</div>
                        <div className={style.button}>
                            <div className={style.nikname}>
                                <img/>
                                <div>Nikname</div>
                            </div>
                            <ButtonSubscribe subscribe={false} setSubscribe={()=>{}}/>
                        </div>
                        <div className={style.points}>
                            <div className={style.point}>Направление дизайна</div>
                            <div className={style.point}>Программа</div>
                        </div>
                        <div>
                            <div className={style.dateContainer}>
                                <div className={style.stats}>
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
                        </div>
                    </div>
                </div>
                <img className={style.view}/>
                <Comments/>
            </div>
        </PopupWindow>
    )
}