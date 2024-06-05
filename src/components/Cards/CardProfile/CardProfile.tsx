import style from "./CardProfile.module.scss"
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {useState} from "react";
import {CardImage} from "../CardImage/CardImage.tsx";

export function CardProfile() {
    const [save, setSave] = useState(false)
    const [like, setLike] = useState(false)
    return (
        <div className={style.container}>
            <CardImage type="profile"/>
            <div className={style.information}>
                    <div className={style.stats}>
                        <div onClick={()=>setSave(prev=>!prev)}>
                        <SaveButton saved={save}/>
                        </div>
                        <div onClick={()=> setLike(prev=>!prev)} className={style.element}>
                            <LikeButton liked={like}/>
                            <div>123</div>
                        </div>
                        <div className={style.element}>
                            <img className={style.stat} src="/message.svg"/>
                            <div>123</div>
                        </div>
                        <div><img src="/send.svg"/></div>
                    </div>
                <div className={style.date}>Сегодня в 18:23</div>
            </div>
        </div>
    )
}