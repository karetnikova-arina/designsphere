import style from "./CommunityUserCard.module.scss"
import {useEffect, useState} from "react";
import {ButtonSubscribe} from "../../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {SOOBSCHESTVO_FRIENDS_INTERFACE} from "../../../data/2soobschestvo-friends.ts";

export function CommunityUserCard(props: SOOBSCHESTVO_FRIENDS_INTERFACE) {
    const location = useLocation()
    const navigation = useNavigate()
    const [subscribe, setSubscribe] = useState(true)
    const [window, setWindow] = useState(false)
    const {jwt} = useSelector((s: RootState) => s.user)
    useEffect(()=>console.log(`images/${props.photo}.jpg`),[])
    const doSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (jwt) {
            setSubscribe(prev => !prev)
        }
    }
    return (
        <>
            {window && <NotificationWindow text="Чтобы подписаться, необходимо авторизоваться"
                                           close={() => setWindow(false)}/>}
            <NavLink to="/communities/account" className={style.container}>
                <img src={`/images/${props.photo}.jpg`} className={style.avatar}/>
                <div className={style.info}>
                        <div className={style.nikname}>{props.nickname}</div>
                        <div className={style.city}>{props.city}</div>
                        <div className={style.direction}>{props.direction}</div>
                    <div className={style.buttons}>
                        {location.pathname!=="/candidate" && <ButtonSubscribe subscribe={subscribe} setSubscribe={doSubscribe}/>}
                        <button className={style.message}>
                            <img src="/letter.svg"/>
                            <div onClick={e=> {
                                e.preventDefault()
                                navigation("/chat/personal/8")
                            }}>Написать</div>
                        </button>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
