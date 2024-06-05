import style from "./NotificationWindow.module.scss"
import {Button} from "../../buttons/Button/Button.tsx";
import {ButtonIcon} from "../../buttons/ButtonIcon/ButtonIcon.tsx";
import {useNavigate} from "react-router-dom";

interface NotificationWindowProps {
    text: string
    close: ()=>void
}
export function NotificationWindow({text, close}: NotificationWindowProps) {
    const navigation = useNavigate()
    return (
        <>
            <div onClick={close} className={style.background}></div>
            <div className={style.container}>
                <div className={style.close}>
                    <ButtonIcon onClick={close} image="/close.svg" alt="Закрыть"/>
                </div>
                <img src="/oops.svg" alt="Упс..."/>
                <div className={style.notification}>{text}</div>
                <div className={style.buttons}>
                    <Button onClick={()=>navigation("/auth/login")} isValid={true}>Войти</Button>
                    <div>или</div>
                    <Button onClick={()=>navigation("/auth/registration")} isValid={true}>Зарегистрироваться</Button>
                </div>
            </div>
        </>
    )
}