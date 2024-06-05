import style from "./DevelopmentWindow.module.scss"
import {ButtonIcon} from "../../buttons/ButtonIcon/ButtonIcon.tsx";

export function DevelopmentWindow({close}: {close: ()=>void}) {
    return(
        <>
            <div onClick={close} className={style.background}></div>
            <div className={style.container}>
                <div className={style.close}>
                    <ButtonIcon onClick={close} image="/close.svg" alt="Закрыть"/>
                </div>
                <img src="/oops.svg" alt="Упс..."/>
                <div className={style.title}>Добавление недоступно</div>
                <div className={style.notification}>Функция находится в разработке.
                    Скоро вы сможете делиться обучающими материалами с другими пользователями</div>
            </div>
        </>
    )
}