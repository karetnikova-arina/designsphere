import style from "./CardWebinar.module.scss"
import {ButtonWebinar} from "../../buttons/ButtonWebinar/ButtonWebinar.tsx";
import React, {useState} from "react";
import {CardImage} from "../CardImage/CardImage.tsx";
import {OBUCHENIE_WEBINAR_INTERFACE} from "../../../data/5obuchenie.ts";

export function CardWebinar({open, props}: {open: ()=>void, props: OBUCHENIE_WEBINAR_INTERFACE}) {
    const [condition, setCondition] = useState("Записаться")
    const signUp = (type: boolean, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (type) {
            if (condition === "Записаться") {
                setCondition("Записан")
            } else {
                setCondition("Записаться")
            }
        }
    }
    return (
        <div onClick={open} className={style.container}>
            <CardImage props={props} type="webinar"/>
            <div className={style.information}>
                <div className={style.element}>
                    <img src={`/images/${props.nickname_photo}.jpg`} className={style.avatar}/>
                    <div className={style.nikname}>{props.nickname}</div>
                </div>
            </div>
            <div className={style.information}>
                <div className={style.stats}>
                    <div className={style.element}>
                        <img src="/calendar.svg"/>
                        <div>{props.data}</div>
                    </div>
                    {condition !== "Посмотреть запись" && <div className={style.element}>
                        <img src="/clock.svg"/>
                        <div>{props.time}</div>
                    </div>}
                </div>
                <ButtonWebinar onClick={(e) => signUp(condition !== "Посмотреть запись", e)} text={condition}/>
            </div>

        </div>
    )
}