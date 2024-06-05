import style from "./InputCreate.module.scss"
import {InputHTMLAttributes, useState} from "react";
import cn from "classnames";

interface InputCreate extends InputHTMLAttributes<HTMLInputElement> {
    error: boolean
}

export function InputCreate(props: InputCreate) {
    const [focus, setFocus] = useState(false)
    return (
        <div className={cn(style.container, {
            [style.focus]: focus,
            [style.error]: props.error
        })}>
            <input {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.5 17.0001H17.5M1.5 17.0001V13.0001L9.5 5.00012M1.5 17.0001L5.5 17.0001L13.5 9.0001M9.5 5.00012L12.3686 2.13146L12.3704 2.12976C12.7652 1.73488 12.963 1.53709 13.191 1.46301C13.3919 1.39775 13.6082 1.39775 13.8091 1.46301C14.0369 1.53704 14.2345 1.7346 14.6288 2.12892L16.3686 3.86872C16.7646 4.26474 16.9627 4.46284 17.0369 4.69117C17.1022 4.89201 17.1021 5.10835 17.0369 5.3092C16.9628 5.53736 16.765 5.73516 16.3695 6.13061L16.3686 6.13146L13.5 9.0001M9.5 5.00012L13.5 9.0001"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}