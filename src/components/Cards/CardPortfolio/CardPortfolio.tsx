import style from "./CardMyGroup.module.scss"
import {CardImage} from "../CardImage/CardImage.tsx";
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";

export function CardMyGroup() {
    const [liked, setLiked] = useState(false)
    return(
        <div className={style.container}>
            <CardImage type="profile"/>
            <div className={style.information}>
                <div className={style.stats}>
                    <div onClick={()=>setLiked(prev=>!prev)} className={style.element}>
                        <LikeButton liked={liked}/>
                        <div>123</div>
                    </div>
                    <div className={style.element}>
                        <img className={style.stat} src="/message.svg"/>
                        <div>123</div>
                    </div>
                </div>
                <button className={style.button}>
                    <img src="/pencilWhite.svg"/>
                    <div>Редактировать</div>
                </button>
            </div>
        </div>
    )
}