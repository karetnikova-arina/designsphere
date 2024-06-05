import style from "./CommunityUserCard.module.scss"
import {useState} from "react";
import {ButtonSubscribe} from "../../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";

export function CommunityUserCard() {
    const location = useLocation()
    const [subscribe, setSubscribe] = useState(false)
    const [window, setWindow] = useState(false)
    const {jwt} = useSelector((s: RootState) => s.user)
    const doSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (jwt) {
            setSubscribe(prev => !prev)
        } else {
            setWindow(true)
        }
    }
    return (
        <>
            {window && <NotificationWindow text="Чтобы подписаться, необходимо авторизоваться"
                                           close={() => setWindow(false)}/>}
            <NavLink to="/communities/account" className={style.container}>
                <img className={style.avatar}/>
                <div className={style.info}>
                        <div className={style.nikname}>Nikname</div>
                        <div className={style.city}>City</div>
                        <div className={style.direction}>Direction</div>
                    <div className={style.buttons}>
                        {location.pathname!=="/candidate" && <ButtonSubscribe subscribe={subscribe} setSubscribe={doSubscribe}/>}
                        <button className={style.message}>
                            <img src="/letter.svg"/>
                            <div>Написать</div>
                        </button>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
