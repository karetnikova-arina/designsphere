import style from "./RegistrationPassword.module.scss"
import {AuthTitle} from "../../components/AuthTitle/AuthTitle.tsx";
import {AuthElement} from "../../components/AuthElement/AuthElement.tsx";
import {InputPassword} from "../../components/InputPassword/InputPassword.tsx";
import {CheckBox} from "../../components/CheckBox/CheckBox.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {formActions, nameTypes} from "../../store/formSlice.ts";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export function RegistrationPassword() {
    const navigation = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {values, isValid} = useSelector((s: RootState) => s.form)
    const [checkedConditions, setCheckedConditions] = useState(false)
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formActions.addValue({name: event.target.name as nameTypes, value: event.target.value}))
        dispatch(formActions.checkValid(event.target.name as nameTypes))
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(formActions.checkValid(2))
        console.log(isValid)
        if (isValid.password && isValid.repeatPassword) {
            if (values.password && values.repeatPassword && checkedConditions) {
                navigation("/auth")
            }
        }
    }
    return (
        <div className={style.container}>
            <AuthTitle title="Регистрация" text="Уже есть аккаунт?" link="Войти"/>
            <div>Пароль должен содержать не менее 8 символов, используйте прописные и заглавные буквы и цифры</div>
            <form onSubmit={(e) => submit(e)} className={style.form}>
                <AuthElement title="Пароль"><InputPassword value={values.password} isValid={isValid.password}
                                                           onChange={(e) => changeValue(e)}
                                                           placeholder="Введите пароль" name="password"/></AuthElement>
                <AuthElement title="Повторите пароль"><InputPassword value={values.repeatPassword}
                                                                     isValid={isValid.repeatPassword}
                                                                     onChange={(e) => changeValue(e)}
                                                                     placeholder="Введите пароль"
                                                                     name="repeatPassword"/></AuthElement>
                <div className={style.checkbox}>
                    <CheckBox checked={checkedConditions} onChange={()=>setCheckedConditions(prev => !prev)} id="conditions">
                        <div>Я согласен <a>с условиями обработки персональных данных</a></div>
                    </CheckBox>
                    <CheckBox id="information">
                        <div>Я хочу получать <a>полезную информацию от сообщества</a></div>
                    </CheckBox>
                </div>
                <Button>Зарегистрироваться</Button>
            </form>
        </div>
    )
}