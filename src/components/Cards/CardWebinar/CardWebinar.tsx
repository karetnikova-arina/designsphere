import style from "./CardWebinar.module.scss"
import {ButtonWebinar} from "../../buttons/ButtonWebinar/ButtonWebinar.tsx";
import React, {useState} from "react";
import {CardImage} from "../CardImage/CardImage.tsx";

export function CardWebinar({open}: {open: ()=>void}) {
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
            <CardImage type="webinar"/>
            <div className={style.information}>
                <div className={style.element}>
                    <img className={style.avatar}/>
                    <div className={style.nikname}>Никнейм</div>
                </div>
            </div>
            <div className={style.information}>
                <div className={style.stats}>
                    <div className={style.element}>
                        <img src="/calendar.svg"/>
                        <div>03.10.2024</div>
                    </div>
                    {condition !== "Посмотреть запись" && <div className={style.element}>
                        <img src="/clock.svg"/>
                        <div>15:00</div>
                    </div>}
                </div>
                <ButtonWebinar onClick={(e) => signUp(condition !== "Посмотреть запись", e)} text={condition}/>
            </div>

        </div>
    )
}