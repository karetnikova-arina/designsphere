import style from "./Button.module.scss"
import {ButtonProps} from "./Button.ts";
import cn from "classnames";

export function Button({children, isValid=true, ...props}: ButtonProps) {
    return (
        <button {...props} className={cn(style.button, {
            [style.inactive]: !isValid
        })}>{children}</button>
    )
}