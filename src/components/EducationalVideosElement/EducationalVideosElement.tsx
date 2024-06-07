import style from "./EducationalVideosElement.module.scss"
import {LikeButton} from "../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {SaveButton} from "../buttons/SaveButton/SaveButton.tsx";
import {OBUCHENIE_VIDEO_INTERFACE} from "../../data/5obuchenie.ts";

export function EducationalVideosElement({open, props}: {open: ()=>void, props: OBUCHENIE_VIDEO_INTERFACE}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    return (
        <div onClick={open} className={style.container}>
            <div onClick={()=>setSaved(prev=>!prev)} className={style.save}>
                <SaveButton saved={saved}/>
            </div>
            <img src={`images/${props.photo}.jpg`} className={style.image}/>
            <div className={style.content}>
                <div>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.description}>{props.description}</div>
                </div>
                <div className={style.statsContainer}>
                    <div className={style.stats}>
                        <div onClick={(e)=> {
                            e.stopPropagation()
                            setLiked(prev => !prev)
                        }} className={style.stat}>
                            <LikeButton liked={liked}/>
                            <div>{props.likes}</div>
                        </div>
                        <div className={style.stat}>
                            <img src="/message.svg"/>
                            <div>{props.comments}</div>
                        </div>
                        <img src="/send.svg"/>
                    </div>
                    <div className={style.date}>{props.data}</div>
                </div>
            </div>
        </div>
    )
}