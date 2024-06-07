import style from "./RadioButton.module.scss"
import {InputHTMLAttributes} from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    setValue: (value: string) => void;
    chosen: boolean;
}

export function RadioButton({ title, setValue, chosen, ...props }: RadioButtonProps) {
    return (
        <div className={style.container}>
            <input {...props} checked={chosen} onChange={() => setValue(title)} className={style.input} id={title} type="radio" />
            <label className={style.label} htmlFor={title}>{title}</label>
        </div>
    );
}