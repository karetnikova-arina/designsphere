import style from "./CommunityFilters.module.scss"
import cn from "classnames";
import {NavLink, useLocation} from "react-router-dom";

export function CommunityFilters() {
    let location = useLocation();
    return(
        <div className={style.container}>
            <div className={style.element}>
                <NavLink to="/communities/friends" className={({isActive})=>cn(style.button, {
                    [style.chose]: isActive
                })}>
                    <div>Все друзья</div>
                    <div>123</div>
                </NavLink>
            </div>
            <div className={style.element}>
                <NavLink to="/communities/groups" className={({isActive})=>cn(style.button, {
                    [style.chose]: isActive
                })}>
                    <div>Группы</div>
                    <div>12</div>
                </NavLink>
                <button className={cn(style.createGroup, {
                    [style.createGroupInGroup]: location.pathname.includes('group')
                })}>
                    <img src="/plus.svg" alt="плюс"/>
                    {location.pathname.includes('group') ?  <NavLink to="/communities/create">Создать группу</NavLink> : <div>Создать группу</div>}
                </button>
            </div>
        </div>
    )
}