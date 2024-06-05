import style from "./ButtonTransperent.module.scss"
import cn from "classnames";
import {ButtonHTMLAttributes} from "react";

interface ButtonTransperentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    highlighting: boolean,
    chosen: boolean
}

export function
ButtonTransperent({title, highlighting, chosen = false, ...props}: ButtonTransperentProps) {
    return (
        <button {...props} className={cn(style.button, {
            [style.highlighting]: highlighting,
            [style.chosen]: chosen
        })}>{title}</button>
    )
}