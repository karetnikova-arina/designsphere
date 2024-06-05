import style from "./EducationalVideosElement.module.scss"
import {LikeButton} from "../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {SaveButton} from "../buttons/SaveButton/SaveButton.tsx";

export function EducationalVideosElement({open}: {open: ()=>void}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    return (
        <div onClick={open} className={style.container}>
            <div onClick={()=>setSaved(prev=>!prev)} className={style.save}>
                <SaveButton saved={saved}/>
            </div>
            <img className={style.image}/>
            <div className={style.content}>
                <div>
                    <div className={style.title}>Title</div>
                    <div className={style.description}>Краткое описание</div>
                </div>
                <div className={style.statsContainer}>
                    <div className={style.stats}>
                        <div onClick={(e)=> {
                            e.stopPropagation()
                            setLiked(prev => !prev)
                        }} className={style.stat}>
                            <LikeButton liked={liked}/>
                            <div>123</div>
                        </div>
                        <div className={style.stat}>
                            <img src="/message.svg"/>
                            <div>123</div>
                        </div>
                        <img src="/send.svg"/>
                    </div>
                    <div className={style.date}>01.02.2020</div>
                </div>
            </div>
        </div>
    )
}