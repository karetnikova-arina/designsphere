import style from "./CardImage.module.scss"
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {useState} from "react";
import cn from "classnames";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
type type = "main" | "webinar" | "group" | "profile"
export function CardImage({type}: {type: type}) {
    const [save, setSave] = useState(false)
    const [window, setWindow] = useState("")
    const {jwt} = useSelector((s: RootState) => s.user)
    const click = () => {
        if (!jwt.length) {
            setWindow("Чтобы сохранить проект, необходимо авторизоваться")
        } else {
            setSave(prev => !prev)
        }
    }
    const close = () => {
        setWindow("")
    }
    return(
        <div className={cn(style.card, {
            [style.group]: type==="group"
        })}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            <div className={style.cardTop}>
                <div className={style.direction}>Направление дизайна</div>
                {type==="main" && <div className={style.save} onClick={click}>
                    <SaveButton saved={save}/>
                </div>}
                {type!=="main" && type!=="webinar" && <div className={style.direction}>Программа</div>}
            </div>
            <div className={style.name}>Название проекта</div>
        </div>
    )
}