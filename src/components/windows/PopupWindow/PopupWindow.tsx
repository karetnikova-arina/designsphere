import style from "./PopupWindow.module.scss"
import {ButtonIcon} from "../../buttons/ButtonIcon/ButtonIcon.tsx";
import {ReactNode} from "react";

export function PopupWindow({close, children}: {close: ()=>void, children: ReactNode}) {
    return(
        <>
            <div onClick={close} className={style.background}></div>
            <div className={style.container}>
                <div className={style.close}>
                    <ButtonIcon onClick={close} image="/close.svg" alt="Закрыть"/>
                </div>
                {children}
            </div>
        </>
    )
}