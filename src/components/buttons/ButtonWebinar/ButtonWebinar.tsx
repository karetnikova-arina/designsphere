import style from "./ButtonWebinar.module.scss"
import {ButtonHTMLAttributes, useEffect, useState} from "react";
import cn from "classnames";

interface ButtonWebinarProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}
export function ButtonWebinar({text, ...props}: ButtonWebinarProps){
    const [condition, setCondition] = useState("")
    useEffect(()=>{
        setCondition(text)
    },[text])
    return(
        <button {...props} className={cn(style.button, {
            [style.signed]: text==="Записан"
        })}>{condition}</button>
    )
}