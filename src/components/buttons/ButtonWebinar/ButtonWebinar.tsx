import style from "./ButtonWebinar.module.scss"
import {ButtonHTMLAttributes, useEffect, useState} from "react";

interface ButtonWebinarProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}
export function ButtonWebinar({text, ...props}: ButtonWebinarProps){
    const [condition, setCondition] = useState("")
    useEffect(()=>{
        setCondition(text)
    },[text])
    return(
        <button {...props} className={style.button}>{condition}</button>
    )
}