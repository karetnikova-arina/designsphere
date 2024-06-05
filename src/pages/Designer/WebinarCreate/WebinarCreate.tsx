import style from "./WebinarCreate.module.scss"
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {DIRECTION, TOPICS} from "../../../data/sortList.ts";
import {Back} from "../../../components/Back/Back.tsx";
import cn from "classnames";
import {InputCreate} from "../../../components/InputCteate/InputCreate.tsx";
import {ErrorMessage} from "../../../components/Error/Error.tsx";
import {SortWindow} from "../../../components/windows/SortWindow/SortWindow.tsx";
import {webinarActions} from "../../../store/webinarSlice.ts";
import {CheckBox} from "../../../components/CheckBox/CheckBox.tsx";

export function WebinarCreate() {
    const navigation = useNavigate()
    const [focusTextarea, setFocusTextarea] = useState(false)
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [nameValue, setNameValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [saveValue, setSaveValue] = useState(false)
    const [direction, setDirection] = useState<{ value: string, chosen: boolean }[]>([])
    const [topic, setTopic] = useState<{ value: string, chosen: boolean }[]>([])
    const [dateValue, setDateValue] = useState("")
    const [timeValue, setTimeValue] = useState("")
    const [validation, setValidation] = useState({name: false, description: false, date: false})
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: false
        }))
        setDirection(newDirection)
        const newTopic = TOPICS.map((el) => ({
            value: el,
            chosen: false
        }))
        setTopic(newTopic)
    }, [])
    useEffect(() => {
        if (nameValue.trim().length) {
            setValidation(prev => ({
                ...prev, name: false
            }))
        }
    }, [nameValue])
    useEffect(() => {
        if (descriptionValue.length) {
            setValidation(prev => ({
                ...prev, description: false
            }))
        }
    }, [descriptionValue])
    useEffect(() => {
        if (dateValue.length===10 && timeValue.length===5) {
            setValidation(prev => ({
                ...prev, date: false
            }))
        }
    }, [dateValue, timeValue])
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const changeValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "name") setNameValue(e.target.value)
        if (e.target.name === "description") setDescriptionValue(e.target.value)
    }
    const sendData = () => {
        const newDirections = direction.map((el) => {
            if (el.chosen) {
                return el.value
            }
            return "";
        }).filter(el => el !== "")
        const newTopics = topic.map((el) => {
            if (el.chosen) {
                return el.value
            }
            return "";
        }).filter(el => el !== "")
        dispatch(webinarActions.addData({
            webinar: {
                image: image ?? "",
                name: nameValue,
                description: descriptionValue,
                topics: newTopics,
                directions: newDirections,
                date: dateValue,
                time: timeValue,
                save: saveValue
            }
        }))
        navigation("/education")
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        if (nameValue.trim().length === 0) setValidation(prev => ({
            ...prev, name: true
        }))
        if (descriptionValue.length === 0) setValidation(prev => ({
            ...prev, description: true
        }))
        if(dateValue.length!==10 || timeValue.length!==5){
            setValidation(prev => ({
                ...prev, date: true
            }))
        }
        if (nameValue.length !== 0 && descriptionValue.length !== 0 && dateValue.length === 10 && timeValue.length===5) {
            sendData()
            navigation("/education")
        }
    }
    const changeDateValue = (e: ChangeEvent<HTMLInputElement>) => {
        let result = ""
        const cleaned = ('' + e.target.value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/)
        if (match) {
            if (match[1]) result += match[1];
            if (match[2]) result += "." + match[2];
            if (match[3]) result += "." + match[3];
        }
        setDateValue(result)
    }
    const changeTimeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let result = ""
        const cleaned = ('' + e.target.value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,2})(\d{0,2})$/)
        if (match) {
            if (match[1]) result += match[1];
            if (match[2]) result += ":" + match[2];
        }
        setTimeValue(result)
    }
    return (
        <form onSubmit={(e) => submit(e)} className={style.container}>
            <Back path="/education"/>
            {image ? <img src={image ?? ""} className={style.image}/> : <div className={style.image}></div>}
            <button type="button" onClick={handleButtonClick} className={style.button}>
                <input className={style.hidden} ref={fileInputRef} type="file" accept="image/*"
                       onChange={handleImageUpload}/>
                <img src="/photo.svg"/>
                <div>Добавить фото</div>
            </button>
            <div className={style.form}>
                <div className={style.relative}>
                    <div className={style.title}>Название вебинара</div>
                    <InputCreate className={style.input} error={validation.name} name="name" value={nameValue}
                                 onChange={(e) => changeValue(e)}
                                 placeholder="Веб-дизайн для начинающих"/>
                    {validation.name && <ErrorMessage text="Поле не заполнено"/>}
                </div>
                <div>
                    <div className={style.title}>Описание вебинара</div>
                    <div className={cn(style.textarea, {
                        [style.focus]: focusTextarea,
                        [style.error]: validation.description
                    })}>
                        <div className={style.relative}>
                <textarea name="description" value={descriptionValue} onChange={(e) => changeValue(e)}
                          onFocus={() => setFocusTextarea(true)} onBlur={() => setFocusTextarea(false)}
                          placeholder="Кратко опишите, о чем будете рассказывать на вебинаре"></textarea>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.5 17.0001H17.5M1.5 17.0001V13.0001L9.5 5.00012M1.5 17.0001L5.5 17.0001L13.5 9.0001M9.5 5.00012L12.3686 2.13146L12.3704 2.12976C12.7652 1.73488 12.963 1.53709 13.191 1.46301C13.3919 1.39775 13.6082 1.39775 13.8091 1.46301C14.0369 1.53704 14.2345 1.7346 14.6288 2.12892L16.3686 3.86872C16.7646 4.26474 16.9627 4.46284 17.0369 4.69117C17.1022 4.89201 17.1021 5.10835 17.0369 5.3092C16.9628 5.53736 16.765 5.73516 16.3695 6.13061L16.3686 6.13146L13.5 9.0001M9.5 5.00012L13.5 9.0001"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {validation.description && <ErrorMessage text="Поле не заполнено"/>}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={style.title}>Темы</div>
                <div className={cn(style.sorts, style.topics)}>
                    <SortWindow dataProps={topic} setValues={setTopic} type="program" right={true} left={true}/>
                </div>
            </div>
            <div>
                <div className={style.title}>Направление</div>
                <div className={style.sorts}>
                    <SortWindow dataProps={direction} setValues={setDirection} type="direction" right={true}
                                left={true}/>
                </div>
            </div>
            <div>
                <div className={style.title}>Дата и время проведения</div>
                <div className={cn(style.input, {
                    [style.error]: validation.date
                })}>
                    <input className={style.inputDate} value={dateValue} onChange={(e) => changeDateValue(e)} placeholder="12.04.2024"/>
                    <input className={style.inputTime} value={timeValue} onChange={(e) => changeTimeValue(e)} placeholder="19:00"/>
                    {validation.date && <ErrorMessage text="Поле не заполнено"/>}
                </div>
            </div>
            <CheckBox id="save" setValue={() => setSaveValue(prevState => !prevState)}>Сохранить запись
                вебинара</CheckBox>
            <button className={cn(style.create, {
                [style.inactive]: nameValue.trim().length === 0 || descriptionValue.length === 0 || dateValue.length === 0 || timeValue.length === 0
            })}>Запланировать вебинар
            </button>
        </form>
    )
}