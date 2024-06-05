import style from "./PublicationCreate.module.scss"
import {useNavigate} from "react-router-dom";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {DIRECTION, PROGRAM} from "../../../data/sortList.ts";
import {Back} from "../../../components/Back/Back.tsx";
import cn from "classnames";
import {InputCreate} from "../../../components/InputCteate/InputCreate.tsx";
import {ErrorMessage} from "../../../components/Error/Error.tsx";
import {SortWindow} from "../../../components/windows/SortWindow/SortWindow.tsx";

export function PublicationCreate() {
    const navigation = useNavigate()
    const [image, setImage] = useState<string | null>(null);
    const [file, setFile] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [nameValue, setNameValue] = useState("")
    const [direction, setDirection] = useState<{ value: string, chosen: boolean }[]>([])
    const [program, setProgram] = useState<{ value: string, chosen: boolean }[]>([])
    const [validation, setValidation] = useState({name: false, file: false})
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: false
        }))
        setDirection(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: false
        }))
        setProgram(newProgram)
    }, [])
    useEffect(() => {
        if (nameValue.trim().length) {
            setValidation(prev => ({
                ...prev, name: false
            }))
        }
    }, [nameValue])
    useEffect(()=>{
        if (file) setValidation(prev => ({
            ...prev, file: false
        }))
    },[file])
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            if(event.target.name === "poster") setImage(reader.result as string);
            if(event.target.name === "file") setFile(reader.result as string)
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            if(event.target.name === "poster") setImage(null)
            if(event.target.name === "file") setFile(null)
        }
    }
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const changeValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "name") setNameValue(e.target.value)
    }
    const sendData = () => {
        // const newDirections = direction.map((el) => {
        //     if (el.chosen) {
        //         return el.value
        //     }
        //     return "";
        // }).filter(el => el !== "")
        // const newTopics = program.map((el) => {
        //     if (el.chosen) {
        //         return el.value
        //     }
        //     return "";
        // }).filter(el => el !== "")
        // dispatch(webinarActions.addData({
        //     webinar: {
        //         image: image ?? "",
        //         name: nameValue,
        //         topics: newTopics,
        //         directions: newDirections,
        //     }
        // }))
        navigation("/education")
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        if (nameValue.trim().length === 0) setValidation(prev => ({
            ...prev, name: true
        }))
        if (!file) setValidation(prev => ({
            ...prev, file: true
        }))
        if (nameValue.length !== 0) {
            sendData()
            navigation("/education")
        }
    }
    return (
        <form onSubmit={(e) => submit(e)} className={style.container}>
            <Back path="/education"/>
            {image ? <img src={image ?? ""} className={style.image}/> : <div className={style.image}></div>}
            <button type="button" onClick={handleButtonClick} className={style.button}>
                <input className={style.hidden} ref={fileInputRef} type="file" name="poster" accept="image/*"
                       onChange={handleImageUpload}/>
                <img src="/photo.svg"/>
                <div>Добавить обложку</div>
            </button>
            <div className={style.form}>
                <div className={style.relative}>
                    <div className={style.title}>Название проекта</div>
                    <InputCreate className={style.input} error={validation.name} name="name" value={nameValue}
                                 onChange={(e) => changeValue(e)}
                                 placeholder="Сайт для IT-компании"/>
                    {validation.name && <ErrorMessage text="Поле не заполнено"/>}
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
                <div className={style.title}>Программы</div>
                <div className={style.sorts}>
                    <SortWindow dataProps={program} setValues={setProgram} type="program" right={true} left={true}/>
                </div>
            </div>
            <button type="button" onClick={handleButtonClick} className={style.button}>
                <input className={style.hidden} ref={fileInputRef} type="file" name="file" accept="image/*"
                       onChange={handleImageUpload}/>
                <img src="/paper_clip.svg"/>
                <div>Прикрепить файл с проектом</div>
                {validation.file && <ErrorMessage text="Поле не заполнено"/>}
            </button>
            <button className={cn(style.create, {
                [style.inactive]: nameValue.trim().length === 0
            })}>Опубликовать
            </button>
        </form>
    )
}