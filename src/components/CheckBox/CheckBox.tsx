import style from "./CheckBox.module.scss"
import {InputHTMLAttributes, ReactNode} from "react";
export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode,
    id: string,
    setValue: () => void
}

export function CheckBox({children, id, setValue, ...props}: CheckBoxProps) {
    return (
        <>
            <input onChange={setValue} {...props} className={style.input} id={id} type="checkbox"/>
            <label className={style.label} htmlFor={id}>{children}</label>
        </>
    );
}