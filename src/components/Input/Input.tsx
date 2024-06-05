import style from "./Input.module.scss"
import {InputProps} from "./InputProps.ts";
import cn from "classnames"
import {useEffect, useRef} from "react";
import {ErrorMessage} from "../Error/Error.tsx";

export function Input({isValid, hidden, value, ...props}: InputProps) {
    console.log(props)
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (inputRef && inputRef.current && inputRef.current.nodeName === 'INPUT') {
            if (hidden) {
                inputRef.current.type = "password";
            } else {
                inputRef.current.type = "text";
            }
        }
    }, [hidden])
    return (
        <div className={style.container}>
            <input value={value} autoComplete="off" ref={inputRef} className={cn(style.input, {
                [style.error]: !isValid
            })} {...props}/>
            {!isValid && <ErrorMessage text={value.length>0 ? "Error" : "Поле не заполнено"}/>}
        </div>

    )
}