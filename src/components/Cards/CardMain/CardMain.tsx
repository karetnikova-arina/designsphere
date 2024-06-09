import style from "./CardMain.module.scss"
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {useEffect, useState} from "react";
import {CardImage} from "../CardImage/CardImage.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {MAIN_PUBLICATION_INTERFACE} from "../../../data/1main.ts";

export function CardMain({props, onClick}: {props: MAIN_PUBLICATION_INTERFACE, onClick: ()=>void }) {
    const [liked, setLiked] = useState(false)
    const [window, setWindow] = useState("")
    const {jwt} = useSelector((s: RootState) => s.user)
    const click = () => {
        if (!jwt.length) {
            setWindow("Чтобы оценить проект, необходимо авторизоваться")
        } else {
            setLiked(prev => !prev)
        }
        return false
    }
    const close = () => {
        setWindow("")
    }
    useEffect(()=>{
        console.log(props)
    },[props])
    return (
        <div className={style.container}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            <CardImage onClick={onClick} info={props} type="main"/>
            <div className={style.information}>
                <div className={style.element}>
                    <img className={style.avatar} src={`images/${props.nickname_photo}.jpg`}/>
                    <div className={style.nikname}>{props.nickname}</div>
                </div>
                <div className={style.stats}>
                    <div className={style.element}>
                        <img className={style.stat} src="/message.svg"/>
                        <div>{props.comments}</div>
                    </div>
                    <div onClick={(e)=> {
                        e.stopPropagation()
                        click()
                    }} className={style.element}>
                        <LikeButton liked={liked}/>
                        <div>{props.like}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}