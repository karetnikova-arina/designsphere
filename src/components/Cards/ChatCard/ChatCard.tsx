import style from "./ChatCard.module.scss"
import {NavLink} from "react-router-dom";
import cn from "classnames";

interface ChatCardProps {
    status: "unread"| "read" | "send" | "received"
    type: "group" | "personal" | "job"
    id: number
    name: string
    text: string
    time: string
    photo: string
    person_photo: string
}
export function ChatCard(props: ChatCardProps) {
    return (
        <NavLink to={`/chat/${props.type}/${props.id}`} className={({isActive})=>cn(style.container, {
            [style.chosen]: isActive
        })}>
            <img src={`/images/${props.photo}.jpg`} className={style.image}/>
            <div className={style.right}>
                <div className={style.info}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.groupMessage}>
                        {props.type==="group" && <img src={`/images/${props.person_photo}.jpg`} className={style.userImage}/>}
                        <div className={style.message}>{props.text}</div>
                    </div>
                </div>
                <div className={style.infoMessage}>
                    <div className={style.data}>{props.time}</div>
                    {props.status.includes("new(") && <div className={style.newMessage}>
                        {parseInt(props.status.match(/\d+/)?.[0] ?? "1")}
                    </div>}
                    {props.status==="send" && <img src="/checkMark.svg" className={style.checkMark}/>}
                    {props.status==="received" && <img src="/checkMarks.svg" className={style.checkMark}/>}
                    {props.status==="read" && <div></div>}
                </div>
            </div>
        </NavLink>
    )
}