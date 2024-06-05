import style from "./Registration.module.scss"
import {AuthTitle} from "../../../components/AuthTitle/AuthTitle.tsx";
import {Input} from "../../../components/Input/Input.tsx";
import {AuthElement} from "../../../components/AuthElement/AuthElement.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {RadioButton} from "../../../components/RadioButton/RadioButton.tsx";
import {useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {formActions, nameTypes} from "../../../store/formSlice.ts";
import {ErrorMessage} from "../../../components/Error/Error.tsx";
import {InputPhone} from "../../../components/InputPhone/InputPhone.tsx";

export function Registration() {
    const navigation = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {values, isValid} = useSelector((s: RootState) => s.form)
    const [checkedPerson, setCheckedPerson] = useState("")
    const [validation, setValidation] = useState(true)


    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formActions.addValue({name: event.target.name as nameTypes, value: event.target.value}))
        dispatch(formActions.checkValid(event.target.name as nameTypes))
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(formActions.checkValid(1))
        if(checkedPerson.length===0){
            setValidation(false)
        }else{
            setValidation(true)
        }
        if (values.name && values.tel && values.surname && values.nikname && values.email && checkedPerson) {
            console.log(isValid)
            navigation("/auth/password")
        }

    }
    const setPerson = (value: string)=>{
        dispatch(formActions.addPerson(value))
        setCheckedPerson(value)
        setValidation(true)
    }
    const formatName = (nameString: string) => {
        return `${nameString.length>0 ? nameString[0].toUpperCase() : ""}${nameString.length > 1 ? nameString.slice(1, nameString.length) : ""}`
    }
    const formatNikname = (niknameString: string) => {
        if (niknameString[0] === "@") {
            return niknameString
        } else if (niknameString.length === 0) return ""
        else return `@${niknameString}`
    }
    return (
        <div className={style.container}>
            <AuthTitle title="Регистрация" text="Уже есть аккаунт?" link="Войти"/>
            <form className={style.form} onSubmit={(e) => submit(e)}>
                <div className={style.radioButtons}>
                    <AuthElement title="Кто вы?">
                        <div className={style.radio}>
                            <RadioButton chosen={checkedPerson==="Дизайнер"} setValue={setPerson} title="Дизайнер"/>
                            <RadioButton chosen={checkedPerson==="Работодатель"} setValue={setPerson} title="Работодатель"/>
                        </div>
                        {!validation && <ErrorMessage text="Поле не заполнено"/>}
                    </AuthElement>
                </div>
                <AuthElement title="Имя"><Input isValid={isValid.name} value={formatName(values.name)}
                                                onChange={(e) => changeValue(e)} name="name"
                                                placeholder="Иван"/></AuthElement>
                <AuthElement title="Фамилия"><Input isValid={isValid.surname} value={formatName(values.surname)}
                                                    onChange={(e) => changeValue(e)} name="surname"
                                                    placeholder="Иванов"/></AuthElement>
                <AuthElement title="Никнейм"><Input isValid={isValid.nikname} value={formatNikname(values.nikname)}
                                                    onChange={(e) => changeValue(e)} name="nikname"
                                                    placeholder="@ivan.ivanov"/></AuthElement>
                <AuthElement title="Электронная почта"><Input isValid={isValid.email} value={values.email}
                                                              onChange={(e) => changeValue(e)} name="email" type="email"
                                                              placeholder="ivan123@mail.ru"/></AuthElement>
                <AuthElement title="Номер телефона"><InputPhone isValid={isValid.tel} value={values.tel}
                                                           onChange={changeValue} name="tel" type="tel"
                                                           placeholder="+7 (999) 999-99-99"/></AuthElement>
                <Button
                    isValid={checkedPerson.length!==0 && isValid.name && isValid.tel && isValid.surname && isValid.nikname && isValid.email}>Далее</Button>
            </form>
            <div className={style.indent}>k</div>
        </div>
    )
}