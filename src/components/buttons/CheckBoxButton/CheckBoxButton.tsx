import style from "./CheckBoxButton.module.scss"
import {ButtonHTMLAttributes, useState} from "react";

interface CheckBoxButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    checked: boolean
}
export function CheckBoxButton() {
    const [checked, setChecked] = useState(false)
    return(
        <button onClick={()=>setChecked(prevState => !prevState)} className={style.button}>
            <img src={checked? "/CheckboxChecked.svg" :"/CheckboxUnchecked.svg"}/>
        </button>
    )
}