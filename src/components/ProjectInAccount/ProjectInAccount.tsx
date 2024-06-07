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
import {MAIN_COMMENTS, MAIN_PROSMOTR} from "../../data/16main_prosmotr.ts";

export function ProjectInAccount({close}: {close: ()=>void}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const {jwt} = useSelector((s: RootState) => s.user)

    return(
        <PopupWindow close={close}>
            <div className={style.container}>
                <div className={style.topPart}>
                    <img src={`/images/${MAIN_PROSMOTR.project_photo}.jpg`} className={style.image}/>
                    <div className={style.info}>
                        <div className={style.title}>{MAIN_PROSMOTR.title}</div>
                        <div className={style.button}>
                            <div className={style.nikname}>
                                <img src={`/images/${MAIN_PROSMOTR.nickname_photo}.jpg`}/>
                                <div>{MAIN_PROSMOTR.nickname}</div>
                            </div>
                            <ButtonSubscribe subscribe={false} setSubscribe={()=>{}}/>
                        </div>
                        <div className={style.points}>
                            <div className={style.point}>{MAIN_PROSMOTR.direction}</div>
                            <div className={style.point}>{MAIN_PROSMOTR.programm}</div>
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
                                        <div>{MAIN_PROSMOTR.like}</div>
                                    </div>
                                    <CommentsButton count={MAIN_PROSMOTR.comments}/>
                                    <button className={style.send}><img src="/send.svg"/></button>
                                </div>
                                <div className={style.date}>{MAIN_PROSMOTR.data}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={`/images/${MAIN_PROSMOTR.project_file}.jpg`} className={style.view}/>
                <Comments comments={MAIN_COMMENTS}/>
            </div>
        </PopupWindow>
    )
}