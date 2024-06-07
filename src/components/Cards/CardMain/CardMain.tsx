import style from "./CardMain.module.scss"
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
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
        console.log(jwt)
        if (!jwt.length) {
            setWindow("Чтобы оценить проект, необходимо авторизоваться")
            console.log(jwt)
        } else {
            setLiked(prev => !prev)
            console.log(jwt)
        }
        return false
    }
    const close = () => {
        setWindow("")
    }
    return (
        <div onClick={onClick} className={style.container}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            <CardImage props={props} type="main"/>
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
                    <div onClick={click} className={style.element}>
                        <LikeButton liked={liked}/>
                        <div>{props.like}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}