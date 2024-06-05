import {AuthTitle} from "../../../components/AuthTitle/AuthTitle.tsx";
import style from "./Login.module.scss"
import {InputPassword} from "../../../components/InputPassword/InputPassword.tsx";
import {AuthElement} from "../../../components/AuthElement/AuthElement.tsx";
import {Input} from "../../../components/Input/Input.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {userActions} from "../../../store/userSlice.tsx";

export function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState({email: true, password: true})
    const dispatch = useDispatch<AppDispatch>()
    const submit = (event: FormEvent) => {
        event.preventDefault()
        const e = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (e.test(email) && password.length) {
            dispatch(userActions.addJwt(password))
            navigate("/")
        } else {
            setIsValid(prev => ({
                ...prev,
                email: e.test(email),
                password: password.length !== 0
            }))
        }
    }
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "email"){
            setEmail(e.target.value)
            setIsValid(prev => ({
                ...prev,
                email: true,
            }))
        }else {
            setPassword(e.target.value)
            setIsValid(prev => ({
                ...prev,
                password: true,
            }))
        }
    }
    return (
        <div className={style.container}>
            <AuthTitle title="Вход" text="Еще нет аккаунта?" link="Зарегистрироваться"/>
            <form onSubmit={(e) => submit(e)} className={style.form}>
                <AuthElement title="Электронная почта"><Input name="email" value={email} onChange={(e) => changeValue(e)}
                                                              isValid={isValid.email}
                                                              placeholder="ivan123@mail.ru"/></AuthElement>
                <AuthElement title="Пароль"><InputPassword name="password" value={password}
                                                           onChange={(e) => changeValue(e)}
                                                           isValid={isValid.password}
                                                           placeholder="Введите пароль"/></AuthElement>
                <Link to="/auth/recovery" className={style.forget}>Забыли пароль?</Link>
                <Button isValid={isValid.password && isValid.email}>Войти</Button>
            </form>
        </div>
    )
}