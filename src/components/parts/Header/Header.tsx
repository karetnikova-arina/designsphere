import style from "./Header.module.scss"
import {InputSearch} from "../../InputSearch/InputSearch.tsx";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {Button} from "../../buttons/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {ButtonIcon} from "../../buttons/ButtonIcon/ButtonIcon.tsx";
import cn from "classnames";
import {useEffect, useState} from "react";
import {NotificationsDesigner} from "../../NotificationsDesigner/NotificationsDesigner.tsx";
import {userActions} from "../../../store/userSlice.tsx";
import {NotificationsEmployer} from "../../NotificationsEmployer/NotificationsEmployer.tsx";

export function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const {jwt, notifications} = useSelector((s: RootState) => s.user)
    const {values} = useSelector((s: RootState) => s.form)
    const dispatch = useDispatch()
    const [openNotification, setOpenNotification] = useState(false)
    const [unreadNot, setUnreadNot] = useState(true)

    useEffect(()=>{
        setUnreadNot(notifications)
    },[notifications])
    const readNotification = () => {
        setOpenNotification(prevState => !prevState)
        dispatch(userActions.readNotifications())
    }
    return (
        <div className={style.container}>
            {values.person === "Работодатель" ?
                <img className={style.logo} src={location.pathname === "/" ? "/logo.svg" : "/logo_black.svg"}
                     alt="Логотип"/> : <Link to="/"><img className={style.logo}
                                                         src={location.pathname === "/" ? "/logo.svg" : "/logo_black.svg"}
                                                         alt="Логотип"/></Link>}
            <InputSearch/>
            {values.person !== "Работодатель" && <><NavLink className={({isActive}) => cn({
                [style.active]: isActive
            })} to="/communities">Сообщество</NavLink>
                <NavLink className={({isActive}) => cn({
                    [style.active]: isActive
                })} to="/education">Обучение</NavLink>
                <NavLink className={({isActive}) => cn({
                    [style.active]: isActive
                })} to="/job">Работа</NavLink></>}
            {values.person === "Работодатель" && <><NavLink className={({isActive}) => cn({
                [style.active]: isActive
            })} to="/vacancy">Вакансии</NavLink>
                <NavLink className={({isActive}) => cn({
                    [style.active]: isActive
                })} to="/candidate">Кандидаты</NavLink></>}
            {jwt.length === 0 ? <Button onClick={() => navigate("/auth/login")} isValid={true}>Войти</Button> : (
                <div className={style.userfich}>
                    <div className={style.notification}>
                        <ButtonIcon onClick={readNotification}
                                    image={unreadNot ? "unread_notification.svg" : "/notification.svg"}
                                    alt="Уведомления"/>
                        {openNotification && (values.person === "Работодатель" ? <NotificationsEmployer/> :
                            <NotificationsDesigner/>)}
                    </div>
                    <NavLink to="/chat"><ButtonIcon onClick={readNotification}
                                                    image={location.pathname === "/chat" ? "/chat_active.svg" : "/chat.svg"}
                                                    alt="Чат"/></NavLink>
                    <NavLink to="/personalaccount"><ButtonIcon
                        image={location.pathname.includes("/personalaccount") ? "/user_active.svg" : "/user.svg"}
                        alt="Пользователь"/></NavLink>
                </div>)}
        </div>
    )
}