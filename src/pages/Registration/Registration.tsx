import style from "./Registration.module.scss"
import {AuthTitle} from "../../components/AuthTitle/AuthTitle.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {AuthElement} from "../../components/AuthElement/AuthElement.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {RadioButton} from "../../components/RadioButton/RadioButton.tsx";
import {useNavigate} from "react-router-dom";
import {FormEvent} from "react";
import {AppDispatch, RootState} from "../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {formActions, nameTypes} from "../../store/formSlice.ts";

export function Registration() {
    const navigation = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {values, isValid} = useSelector((s: RootState) => s.form)
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formActions.addValue({name: event.target.name as nameTypes, value: event.target.value}))
        dispatch(formActions.checkValid(event.target.name as nameTypes))
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(formActions.checkValid(1))
        if (isValid.name && isValid.tel && isValid.surname && isValid.nikname && isValid.email) {
            if (values.name && values.tel && values.surname && values.nikname && values.email) {
                console.log(isValid)
                navigation("/auth/password")
            }
        }
    }
    return (
        <div className={style.container}>
            <AuthTitle title="Регистрация" text="Уже есть аккаунт?" link="Войти"/>
            <form className={style.form} onSubmit={(e) => submit(e)}>
                <div className={style.radioButtons}>
                    <AuthElement title="Кто вы?">
                        <div className={style.radio}>
                            <RadioButton title="Дизайнер"/>
                            <RadioButton title="Работодатель"/>
                        </div>
                    </AuthElement>
                </div>
                <AuthElement title="Имя"><Input isValid={isValid.name} value={values.name}
                                                onChange={(e) => changeValue(e)} name="name"
                                                placeholder="Иван"/></AuthElement>
                <AuthElement title="Фамилия"><Input isValid={isValid.surname} value={values.surname}
                                                    onChange={(e) => changeValue(e)} name="surname"
                                                    placeholder="Иванов"/></AuthElement>
                <AuthElement title="Никнейм"><Input isValid={isValid.nikname} value={values.nikname}
                                                    onChange={(e) => changeValue(e)} name="nikname"
                                                    placeholder="@ivan.ivanov"/></AuthElement>
                <AuthElement title="Электронная почта"><Input isValid={isValid.email} value={values.email}
                                                              onChange={(e) => changeValue(e)} name="email" type="email"
                                                              placeholder="ivan123@mail.ru"/></AuthElement>
                <AuthElement title="Номер телефона"><Input isValid={isValid.tel} value={values.tel}
                                                           onChange={(e) => changeValue(e)} name="tel" type="tel"
                                                           placeholder="+7 (999) 999-99-99"/></AuthElement>
                <Button>Далее</Button>
            </form>
            <div className={style.indent}>k</div>
        </div>
    )
}