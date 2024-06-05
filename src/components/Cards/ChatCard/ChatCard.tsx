import style from "./ChatCard.module.scss"
import {NavLink} from "react-router-dom";
import cn from "classnames";

interface ChatCardProps {
    status: "unread"| "read" | "send" | "received"
    type: "group" | "personal" | "job"
    id: number
    name: string
    text: string
}
export function ChatCard(props: ChatCardProps) {
    return (
        <NavLink to={`/chat/${props.type}/${props.id}`} className={({isActive})=>cn(style.container, {
            [style.chosen]: isActive
        })}>
            <img className={style.image}/>
            <div className={style.right}>
                <div className={style.info}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.groupMessage}>
                        {props.type==="group" && <img className={style.userImage}/>}
                        <div className={style.message}>{props.text}</div>
                    </div>
                </div>
                <div className={style.infoMessage}>
                    <div className={style.data}>20:39</div>
                    {props.status==="unread" && <div className={style.newMessage}>1</div>}
                    {props.status==="send" && <img src="/checkMark.svg" className={style.checkMark}/>}
                    {props.status==="received" && <img src="/checkMarks.svg" className={style.checkMark}/>}
                    {props.status==="read" && <div></div>}
                </div>
            </div>
        </NavLink>
    )
}