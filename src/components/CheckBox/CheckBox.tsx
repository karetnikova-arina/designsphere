import style from "./CheckBox.module.scss"
import {InputHTMLAttributes, ReactNode} from "react";
export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode,
    id: string
}
export function CheckBox({children, id, ...props}: CheckBoxProps) {
    return (
        <>
            <input {...props} className={style.input} id={id} type="checkbox" name="check"/>
            <label className={style.label} htmlFor={id}>{children}</label>
        </>
    )
}