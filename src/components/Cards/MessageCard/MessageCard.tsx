import style from "./MessageCard.module.scss"
import cn from "classnames";

interface MessageCard {
    type: "personal" | "group" | "job"
    person: string,
    text: string,
    data: string,
    read: boolean
}

export function MessageCard(props: MessageCard) {
    return (
        <div className={cn(style.container, {
            [style.me]: props.person === "me"
        })}>
            {props.type === "group" && props.person!=="me" && <div className={style.userName}>{props.person}</div>}
            <div className={style.text}>{props.text}</div>
            <div className={style.info}>
                <div>{props.data}</div>
                {props.person === "me" && <img src={props.read ? "/checkMarks.svg" : "/checkMark.svg"}/>}
            </div>
        </div>
    )
}