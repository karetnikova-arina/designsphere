import {InputHTMLAttributes} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    isValid: boolean,
    hidden?: boolean,
    value: string
}