import style from "./EditAccount.module.scss"
import {InputCreate} from "../../../components/InputCteate/InputCreate.tsx";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {RadioButton} from "../../../components/RadioButton/RadioButton.tsx";
import {SortWindow} from "../../../components/windows/SortWindow/SortWindow.tsx";
import {DIRECTION, PROGRAM} from "../../../data/sortList.ts";
import {userActions} from "../../../store/userSlice.tsx";
import {useNavigate} from "react-router-dom";
import {Back} from "../../../components/Back/Back.tsx";

export function EditAccount() {
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string>("");
    const {user} = useSelector((s: RootState) => s.user)
    const [gender, setGender] = useState("")
    const [direction, setDirection] = useState<{ value: string, chosen: boolean }[]>([])
    const [program, setProgram] = useState<{ value: string, chosen: boolean }[]>([])
    const [inputs, setInputs] = useState({nikname: "", name: "", surname: "", city: "", birthday: "", phone: "", email: ""})
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: user.directions.includes(el)
        }))
        setDirection(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: user.programs.includes(el)
        }))
        setProgram(newProgram)
        setGender(user.gender === "man" ? "Мужской" : "Женский")
    }, [user.programs, user.directions])
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let result = e.target.value
        if(e.target.name==="phone"){
            result=""
            const cleaned = ('' + e.target.value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
            if (match) {
                result = "+7";
                if (match[2]) result += " (" + match[2];
                if (match[3]) result += ") " + match[3];
                if (match[4]) result += "-" + match[4];
                if (match[5]) result += "-" + match[5];
            }
        }
        if(e.target.name==="birthday"){
            result=""
            const cleaned = ('' + e.target.value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/)
            if (match) {
                if (match[1]) result += match[1];
                if (match[2]) result += "." + match[2];
                if (match[3]) result += "." + match[3];
            }
        }
        if(e.target.name==="name" || e.target.name==="surname" || e.target.name==="city"){
            if(e.target.value.length===1){
                result = e.target.value.toUpperCase()
            }else{
                result=e.target.value
            }
        }
        if(e.target.name==="nikname"){
            if(e.target.value.length===1){
                if(e.target.value[0]!=="@"){
                    result = "@" + e.target.value
                }
            }else {
                result = e.target.value
            }
        }
        setInputs({...inputs, [e.target.name]: result})
    }
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImage("");
        }
    };
    const clean = () => {
        setInputs({nikname: "", name: "", surname: "", city: "", birthday: "", phone: "", email: ""})
        setGender(user.gender==="man" ? "Мужской" : "Женский")
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: user.directions.includes(el)
        }))
        setDirection(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: user.programs.includes(el)
        }))
        setProgram(newProgram)
        setImage(user.image)
        navigate("/personalaccount")
    }
    const sendData = () => {
        const date = inputs.birthday.split(".")
        const direct = direction.filter(el=>el.chosen).map(el=>el.value)
        const prog = program.filter(el=>el.chosen).map(el=>el.value)
        dispatch(userActions.updateDataUser( {
            image: image.length!==0 ? image : user.image,
            nikname: inputs.nikname.length > 1 ? inputs.nikname : user.nikname,
            name: inputs.name.length > 0 ? inputs.name : user.name,
            surname: inputs.surname.length > 0 ? inputs.surname : user.surname,
            city: inputs.city.length > 0 ? inputs.city : user.city,
            birthday: date.length === 3 ? new Date(Number(date[0]), Number(date[1]), Number(date[2])) : user.birthday,
            phone: inputs.phone.length === 18 ? inputs.phone : user.phone,
            email: inputs.email.length > 6 ? inputs.email : user.email,
            gender: gender === "Мужской" ? "man" : "woman",
            directions: direct,
            programs: prog
        }))
        navigate("/personalaccount")
    }
    return (
        <div className={style.container}>
            <Back path="/personalaccount"/>
            <div className={style.title}>Личные данные</div>
            <img src={image.length!==0 ? image : user.image} className={style.image}/>
            <button type="button" onClick={handleButtonClick} className={style.button}>
                <input className={style.hidden} ref={fileInputRef} type="file" accept="image/*"
                       onChange={handleImageUpload}/>
                <img src="/pencilBlue.svg"/>
                <div>Изменить фото</div>
            </button>
            <div className={style.inputs}>
                <div className={style.element}>
                    <div>Никнейм</div>
                    <InputCreate value={inputs.nikname} onChange={(e)=>changeValue(e)} placeholder={user.nikname} className={style.input} error={false} name="nikname"/>
                </div>
                <div className={style.element}>
                    <div>Имя</div>
                    <InputCreate value={inputs.name} onChange={(e)=>changeValue(e)} placeholder={user.name} className={style.input} error={false} name="name"/>
                </div>
                <div className={style.element}>
                    <div>Фамилия</div>
                    <InputCreate value={inputs.surname} onChange={(e)=>changeValue(e)} placeholder={user.surname} className={style.input} error={false} name="surname"/>
                </div>
                <div className={style.element}>
                    <div>Город</div>
                    <InputCreate value={inputs.city} onChange={(e)=>changeValue(e)} placeholder={user.city} className={style.input} error={false} name="city"/>
                </div>
                <div className={style.element}>
                    <div>Пол</div>
                    <div className={style.radio}>
                        <RadioButton title="Мужской" setValue={setGender} chosen={gender === "Мужской"}/>
                        <RadioButton title="Женский" setValue={setGender} chosen={gender === "Женский"}/>
                    </div>
                </div>
                <div className={style.element}>
                    <div>Дата рождения</div>
                    <InputCreate value={inputs.birthday} onChange={(e)=>changeValue(e)}
                        placeholder={user.birthday ? `${user.birthday.getDate()}.${user.birthday.getMonth() + 1}.${user.birthday.getFullYear()}` : ""}
                        className={style.input} error={false} name="birthday"/>
                </div>
                <div className={style.element}>
                    <div>Номер телефона</div>
                    <InputCreate value={inputs.phone} onChange={(e)=>changeValue(e)} placeholder={user.phone} className={style.input} error={false} name="phone"/>
                </div>
                <div className={style.element}>
                    <div>Электронная почта</div>
                    <InputCreate value={inputs.email} onChange={(e)=>changeValue(e)} placeholder={user.email} className={style.input} error={false} name="email"/>
                </div>
            </div>
            <div>
                <div className={style.sorts}>Направление</div>
                <div className={style.sort}>
                    <SortWindow dataProps={direction} setValues={setDirection} type="direction" right={true}
                                left={true}/>
                </div>
            </div>
            <div>
                <div className={style.sorts}>Программы</div>
                <div className={style.sort}>
                    <SortWindow dataProps={program} setValues={setProgram} type="program" right={true} left={true}/>
                </div>
            </div>
            <div className={style.buttons}>
                <button type="button" onClick={clean} className={style.cancel}> Отменить изменения</button>
                <button type="button" onClick={sendData} className={style.create}> Сохранить изменения</button>
            </div>
        </div>
    )
}