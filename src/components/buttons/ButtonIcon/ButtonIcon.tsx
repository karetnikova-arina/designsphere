import style from "./ButtonIcon.module.scss"
import {ButtonHTMLAttributes} from "react";
interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    image: string
    alt: string
}
export function ButtonIcon({image, alt, ...props}: ButtonIconProps) {
    return(
        <button {...props} className={style.button}><img src={image} alt={alt}/></button>
    )
}