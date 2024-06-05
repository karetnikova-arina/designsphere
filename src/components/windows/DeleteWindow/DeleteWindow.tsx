import style from "./DeleteWindow.module.scss"
import {ButtonIcon} from "../../buttons/ButtonIcon/ButtonIcon.tsx";

interface DeleteWindowProps{
    close: ()=>void,
    delete: ()=>void,
}
export function DeleteWindow(props: DeleteWindowProps) {
    return(
        <>
            <div onClick={props.close} className={style.background}></div>
            <div className={style.container}>
            <div className={style.close}>
                <ButtonIcon onClick={props.close} image="/close.svg" alt="Закрыть"/>
            </div>
            <div className={style.title}>Удалить группу</div>
            <div className={style.text}>Вы уверены, что хотите удалить группу? Дальнейшее восстановление невозможно!</div>
            <div className={style.buttons}>
                <button onClick={props.delete} className={style.delete}>Да, удалить</button>
                <button onClick={props.close} className={style.save}>Нет, я передумад(а)</button>
            </div>
        </div>
        </>

    )
}