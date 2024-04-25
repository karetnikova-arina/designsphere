import style from "./Input.module.scss"
import {InputProps} from "./InputProps.ts";
import cn from "classnames"
import {useEffect, useRef} from "react";

export function Input({isValid, hidden, ...props}: InputProps) {
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
            <input autoComplete="off" ref={inputRef} className={cn(style.input, {
                [style.error]: !isValid
            })} {...props}/>
            {!isValid && <div className={style.errorMessage}><img src="/error.png" alt="Ошибка"/>
                <div>Error</div>
            </div>}
        </div>

    )
}