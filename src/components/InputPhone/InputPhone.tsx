import {Input} from "../Input/Input.tsx";
import {InputProps} from "../Input/InputProps.ts";

interface InputPhoneProps extends InputProps{
    isValid: boolean,
    value: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}
export function InputPhone({isValid, value, onChange, ...props}: InputPhoneProps) {
    const formatPhoneNumber = (phoneNumberString: string) => {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '');

        // В зависимости от длины введенного номера применяем соответствующий шаблон
        const match = cleaned.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (match) {
            let result = "+7";
            if (match[2]) result += " (" + match[2];
            if (match[3]) result += ") " + match[3];
            if (match[4]) result += "-" + match[4];
            if (match[5]) result += "-" + match[5];
            return result;
        }
    }
    return(
        <Input {...props} isValid={isValid} value={formatPhoneNumber(value)?? ""}
               onChange={(e)=>onChange(e)} name="tel" type="tel"
               placeholder="+7 (999) 999-99-99"/>
    )
}