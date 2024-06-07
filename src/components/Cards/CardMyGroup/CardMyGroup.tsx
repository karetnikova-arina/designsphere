import style from "./CardMyGroup.module.scss"
import {CardImage} from "../CardImage/CardImage.tsx";
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {PORTFOLIO_INTERFACE} from "../../../data/17user_profile.ts";

export function CardMyGroup({type, onClick, props}: {type: boolean, onClick: ()=>void, props: PORTFOLIO_INTERFACE}) {
    const [liked, setLiked] = useState(false)
    return(
        <div onClick={onClick} className={style.container}>
            <CardImage props={props} type="profile"/>
            <div className={style.information}>
                <div className={style.stats}>
                    <div onClick={()=>setLiked(prev=>!prev)} className={style.element}>
                        <LikeButton liked={liked}/>
                        <div>{props.like}</div>
                    </div>
                    <div className={style.element}>
                        <img className={style.stat} src="/message.svg"/>
                        <div>{props.comments}</div>
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