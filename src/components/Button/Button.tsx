import style from "./Button.module.scss"
import {ButtonProps} from "./Button";

export function Button({children, ...props}: ButtonProps) {
    return(
        <button {...props} className={style.button}>{children}</button>
    )
}