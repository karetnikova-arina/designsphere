import style from "./Comment.module.scss"
import {LikeButton} from "../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

interface commentProps {
    name: string
    text: string
    date: string
    photo: string
    like: {
        liked: boolean
        count: number
    }
}

export function Comment(props: commentProps) {
    const {jwt} = useSelector((s:RootState)=>s.user)
    const [liked, setLiked] = useState(props.like.liked)
    return (
        <div className={style.container}>
            <img src={props.photo} className={style.image}/>
            <div className={style.comment}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.text}</div>
                <div className={style.bottom}>
                    <div className={style.date}>{props.date}</div>
                    <div className={style.bottomItem}>
                        <div className={style.answer}>Ответить</div>
                        <div onClick={()=>{if(jwt) {
                            setLiked(prevState => !prevState)
                        }}} className={style.likes}>
                            <LikeButton liked={liked}/>
                            {props.like.count > 1 && <div>{props.like.count}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}