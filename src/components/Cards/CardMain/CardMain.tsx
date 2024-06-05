import style from "./CardMain.module.scss"
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";
import {useState} from "react";
import {CardImage} from "../CardImage/CardImage.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";

export function CardMain() {
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
        <div className={style.container}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            <CardImage type="main"/>
            <div className={style.information}>
                <div className={style.element}>
                    <img className={style.avatar}/>
                    <div className={style.nikname}>Никнейм</div>
                </div>
                <div className={style.stats}>
                    <div className={style.element}>
                        <img className={style.stat} src="/message.svg"/>
                        <div>123</div>
                    </div>
                    <div onClick={click} className={style.element}>
                        <LikeButton liked={liked}/>
                        <div>123</div>
                    </div>
                </div>
            </div>
        </div>
    )
}