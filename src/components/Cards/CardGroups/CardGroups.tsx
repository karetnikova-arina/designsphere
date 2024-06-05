import style from "./CardGroups.module.scss"
import {ButtonSubscribe} from "../../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {CardImage} from "../CardImage/CardImage.tsx";
import {useState} from "react";
import {NavLink} from "react-router-dom";

export function CardGroups() {
    const [subscribe, setSubscribe] = useState(false)
    return (
        <NavLink to="/communities/group" className={style.container}>
            <CardImage type="group"/>
            <div className={style.information}>
                <ButtonSubscribe subscribe={subscribe} setSubscribe={() => setSubscribe(prev => !prev)}/>
                <div className={style.element}>
                    <img className={style.stat}
                         src="/group.svg"/>
                    <div>123</div>
                </div>
            </div>
        </NavLink>
    )
}