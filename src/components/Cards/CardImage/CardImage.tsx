import style from "./CardImage.module.scss"
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {useState} from "react";
import cn from "classnames";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {MAIN_PUBLICATION_INTERFACE} from "../../../data/1main.ts";
import {SOOBSCHESTVO_GROUPS_INTERFACE} from "../../../data/3soobschestvo-groups.ts";
import {OBUCHENIE_WEBINAR_INTERFACE} from "../../../data/5obuchenie.ts";
import {SOOBSCHESTVO_GROUP_POST_INTERFACE} from "../../../data/4group-post.ts";
import {PORTFOLIO_INTERFACE} from "../../../data/17user_profile.ts";
type type = "main" | "webinar" | "group" | "profile"
export function CardImage({type, props}: {type: type, props: MAIN_PUBLICATION_INTERFACE | SOOBSCHESTVO_GROUPS_INTERFACE | OBUCHENIE_WEBINAR_INTERFACE | SOOBSCHESTVO_GROUP_POST_INTERFACE | PORTFOLIO_INTERFACE}) {
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
        <div style={{ backgroundImage: `url(/images/${props.photo}.jpg)` }} className={cn(style.card, {
            [style.group]: type==="group"
        })}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            <div className={style.cardTop}>
                <div className={style.direction}>{props.direction}</div>
                {type==="main" && <div className={style.save} onClick={click}>
                    <SaveButton saved={save}/>
                </div>}
                {type!=="main" && type!=="webinar" && 'programm' in props && <div className={style.program}>{props.programm}</div>}
            </div>
            <div className={style.name}>{props.title}</div>
        </div>
    )
}