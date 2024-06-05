import {AuthTitle} from "../../../components/AuthTitle/AuthTitle.tsx";
import {InputPhone} from "../../../components/InputPhone/InputPhone.tsx";
import {AuthElement} from "../../../components/AuthElement/AuthElement.tsx";
import {Input} from "../../../components/Input/Input.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {FormEvent, useState} from "react";
import {formActions, nameTypes} from "../../../store/formSlice.ts";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import style from "./Recovery.module.scss"
import {useNavigate} from "react-router-dom";


export function Recovery() {
    const navigation = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {values, isValid} = useSelector((s: RootState) => s.form)
    const [code, setCode] = useState("")
    const [validationCode, setValidationCode] = useState(true)
    const submit = (e: FormEvent) => {
        e.preventDefault()
        if (code.length !== 4) {
            setValidationCode(false)
        } else {
            setValidationCode(true)
            if(isValid.tel){
                navigation("/auth/newpassword")
            }
        }
        dispatch(formActions.checkValid("tel"))

    }
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formActions.addValue({name: event.target.name as nameTypes, value: event.target.value}))
        if (!isValid.tel) dispatch(formActions.checkValid(event.target.name as nameTypes))
    }
    const changeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 5) {
            setCode(e.target.value)
        }
        setValidationCode(true)
    }
    return (
        <div className={style.container}>
            <AuthTitle title="Восстановление пароля" text="" link=""/>
            <form className={style.container} onSubmit={(e) => submit(e)}>
                <AuthElement title="Номер телефона"><InputPhone isValid={isValid.tel} value={values.tel}
                                                                onChange={changeValue} name="tel" type="tel"
                                                                placeholder="+7 (999) 999-99-99"/></AuthElement>
                <AuthElement title="Код пароль">
                    <Input onChange={(e) => changeCode(e)} isValid={validationCode} value={code}/>
                </AuthElement>
                <Button isValid={isValid.tel && validationCode}>Далее</Button>
            </form>
        </div>
    )
}