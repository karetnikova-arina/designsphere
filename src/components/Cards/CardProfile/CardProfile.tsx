import style from "./CardProfile.module.scss"
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {useState} from "react";
import {CardImage} from "../CardImage/CardImage.tsx";
import {SOOBSCHESTVO_GROUP1_POSTS} from "../../../data/11soobschestvo_group1.ts";

export function CardProfile(props: typeof SOOBSCHESTVO_GROUP1_POSTS[0]) {
    const [save, setSave] = useState(false)
    const [like, setLike] = useState(false)
    return (
        <div className={style.container}>
            <CardImage info={props} type="profile"/>
            <div className={style.information}>
                    <div className={style.stats}>
                        <div onClick={()=>setSave(prev=>!prev)}>
                        <SaveButton saved={save}/>
                        </div>
                        <div onClick={()=> setLike(prev=>!prev)} className={style.element}>
                            <LikeButton liked={like}/>
                            <div>{props.likes}</div>
                        </div>
                        <div className={style.element}>
                            <img className={style.stat} src="/message.svg"/>
                            <div>{props.comments}</div>
                        </div>
                        <div><img src="/send.svg"/></div>
                    </div>
                <div className={style.date}>{props.time}</div>
            </div>
        </div>
    )
}