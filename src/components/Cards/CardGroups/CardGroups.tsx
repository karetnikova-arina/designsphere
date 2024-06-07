import style from "./CardGroups.module.scss"
import {ButtonSubscribe} from "../../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {CardImage} from "../CardImage/CardImage.tsx";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {SOOBSCHESTVO_GROUPS_INTERFACE} from "../../../data/3soobschestvo-groups.ts";

export function CardGroups(props: SOOBSCHESTVO_GROUPS_INTERFACE) {
    const [subscribe, setSubscribe] = useState(false)
    return (
        <NavLink to="/communities/group" className={style.container}>
            <CardImage props={props} type="group"/>
            <div className={style.information}>
                <ButtonSubscribe subscribe={subscribe} setSubscribe={() => setSubscribe(prev => !prev)}/>
                <div className={style.element}>
                    <img className={style.stat}
                         src="/group.svg"/>
                    <div>{props.subscribers}</div>
                </div>
            </div>
        </NavLink>
    )
}