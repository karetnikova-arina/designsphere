import style from "./ButtonTransperent.module.scss"
import cn from "classnames";
import {ButtonHTMLAttributes} from "react";

interface ButtonTransperentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    highlighting: boolean,
    chosen: boolean,
    chosenAnother?:boolean
}

export function ButtonTransperent({title, highlighting, chosen, chosenAnother, ...props}: ButtonTransperentProps) {
    return (
        <button {...props} className={cn(style.button, {
            [style.highlighting]: highlighting,
            [style.chosen]: chosen,
            [style.dark_chosen]: chosenAnother
        })}>{title}</button>
    )
}