import style from "./CardMyGroup.module.scss"
import {CardImage} from "../CardImage/CardImage.tsx";
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";

export function CardMyGroup({type, onClick}: {type: boolean, onClick: ()=>void}) {
    const [liked, setLiked] = useState(false)
    return(
        <div onClick={onClick} className={style.container}>
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
                {type ? <button className={style.button}>
                    <img src="/pencilWhite.svg"/>
                    <div>Редактировать</div>
                </button> : <div className={style.date}>Сегодня в 18:23</div>}
            </div>
        </div>
    )
}