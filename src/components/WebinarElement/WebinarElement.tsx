import style from "./WebinarElement.module.scss"
import {NotificationWindow} from "../windows/NotificationWindow/NotificationWindow.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export function WebinarElement({type}: {type: string}) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [window, setWindow] = useState("")
    const {jwt} = useSelector((s: RootState) => s.user)

    const click = (type: string) => {
        if (!jwt.length) {
            if (type === "save") {
                setWindow("Чтобы сохранить проект, необходимо авторизоваться")
            }else if (type === "like") {
                setWindow("Чтобы оценить проект, необходимо авторизоваться")
            }
        } else {
            if (type === "save") {
                setSaved(prev => !prev)
            }else{
                setLiked(prev => !prev)
            }
        }
    }
    const close = () => {
        setWindow("")
    }
    return(
        <div>
            <div className={style.container}>
                {window.length > 0 && <NotificationWindow close={close} text={window}/>}
                <div className={style.card}>
                    <div className={style.cardTop}>
                        <div className={style.direction}>Направление дизайна</div>
                        {type==="publication"&&<div onClick={() => click("save")} className={style.favourites}><img
                            src={saved ? "/saved.svg" : "/save.svg"} alt="Избранное"/></div>}
                        {type==="group"&& <div>Программа</div>}
                    </div>
                    <div className={style.name}>Название проекта</div>
                </div>
                <div className={style.information}>
                    <div className={style.element}>
                        <img className={style.avatar}/>
                        <div>Никнейм</div>
                    </div>
                    <div className={style.stats}>
                        <div className={style.element}>
                            <img className={style.stat} src="/message.svg"/>
                            <div>123</div>
                        </div>
                        <div className={style.element}>
                            <img onClick={() => click("like")} className={style.stat}
                                 src={liked ? "/liked.svg" : "/like.svg"}/>
                            <div>123</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}