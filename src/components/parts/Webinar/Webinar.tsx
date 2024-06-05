import style from "./Webinar.module.scss"
import {ButtonSubscribe} from "../../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {ButtonWebinar} from "../../buttons/ButtonWebinar/ButtonWebinar.tsx";
import {PopupWindow} from "../../windows/PopupWindow/PopupWindow.tsx";

export function Webinar({close}: {close: ()=>void}) {
    const [subscribe, setSubscribe] = useState(false)
    const [condition, setCondition] = useState("Записаться")
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
    const signUp = (type: boolean) => {
        if (type) {
            if (condition === "Записаться") {
                setCondition("Записан")
            } else {
                setCondition("Записаться")
            }
        }
    }
    return(
        <>
        {window && <NotificationWindow text="Чтобы подписаться, необходимо авторизоваться"
                                       close={() => setWindow(false)}/>}
            <PopupWindow close={close}>
                <div className={style.top}>
                    <img/>
                    <div className={style.info}>
                        <div className={style.title}>Title</div>
                        <div className={style.description}>nfghfdjgkjdghkdghdjgdfjkghdkjghfdgkdhg</div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.nikname}>
                        <img/>
                        <div>Nikname</div>
                    </div>
                    <div className={style.buttons}>
                        <ButtonSubscribe subscribe={subscribe} setSubscribe={doSubscribe}/>
                        <div className={style.greenButtons}>Направление дизайна</div>
                        <div className={style.greenButtons}>Тема вебинара</div>
                        <div className={style.iconContainer}>
                            <img src="/calendar.svg"/>
                            <div>12.04.2024</div>
                        </div>
                        <div className={style.iconContainer}>
                            <img src="/clock.svg"/>
                            <div>15:00</div>
                        </div>
                        <ButtonWebinar onClick={() => signUp(condition !== "Посмотреть запись")} text={condition}/>
                    </div>
                </div>
            </PopupWindow>
        </>
    )
}