import style from "./CreateGroup.module.scss"
import {InputCreate} from "../../../components/InputCteate/InputCreate.tsx";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import cn from "classnames";
import {SortWindow} from "../../../components/windows/SortWindow/SortWindow.tsx";
import {RadioButton} from "../../../components/RadioButton/RadioButton.tsx";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "../../../components/Error/Error.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {myGroupActions} from "../../../store/myGroupSlice.ts";
import {DIRECTION, PROGRAM} from "../../../data/sortList.ts";
import {Back} from "../../../components/Back/Back.tsx";
import {DeleteWindow} from "../../../components/windows/DeleteWindow/DeleteWindow.tsx";
import {Info} from "../../../components/Info/Info.tsx";

export function CreateGroup({type}: { type: boolean }) {
    const {group} = useSelector((s: RootState) => s.myGroup)
    const navigation = useNavigate()
    const [focusTextarea, setFocusTextarea] = useState(false)
    const [radio, setRadio] = useState("")
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [nameValue, setNameValue] = useState("")
    const [showInfo, setShowInfo] = useState(false)
    const [descriptionValue, setDescriptionValue] = useState("")
    const [direction, setDirection] = useState<{ value: string, chosen: boolean }[]>([])
    const [program, setProgram] = useState<{ value: string, chosen: boolean }[]>([])
    const [validation, setValidation] = useState({name: false, description: false, radio: false})
    const [deleteWindow, setDeleteWindow] = useState(false)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: !type ? group.directions.includes(el) : false
        }))
        setDirection(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: !type ? group.programs.includes(el) : false
        }))
        setProgram(newProgram)
        setRadio(type ? "" : (group.visible ? "Публичная" : "Закрытая"))
        setImage(!type ? group.image : "")
    }, [group.programs, group.directions])
    useEffect(() => {
        if (nameValue.length) {
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
        if (radio.length) {
            setValidation(prev => ({
                ...prev, radio: false
            }))
        }
        console.log(direction)
    }, [radio])
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
        const newPrograms = program.map((el) => {
            if (el.chosen) {
                return el.value
            }
            return "";
        }).filter(el => el !== "")
        dispatch(myGroupActions.addData({
            group: {
                image: image ?? "",
                name: nameValue,
                description: descriptionValue,
                visible: radio === "Публичная",
                programs: newPrograms,
                directions: newDirections,
                creator_photo: ""
            }
        }))
        navigation("/communities/mygroup")
    }
    const submit = (e: FormEvent) => {
        e.preventDefault()
        if (nameValue.length === 0) setValidation(prev => ({
            ...prev, name: true
        }))
        if (descriptionValue.length === 0) setValidation(prev => ({
            ...prev, description: true
        }))
        if (radio.length === 0) setValidation(prev => ({
            ...prev, radio: true
        }))
        if (nameValue.length !== 0 && descriptionValue.length !== 0 && radio.length !== 0) {
            sendData()
        }
    }
    const clean = () => {
        setImage(group.image)
        setRadio(group.visible ? "Публичная" : "Закрытая")
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: group.directions.includes(el)
        }))
        setDirection(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: group.programs.includes(el)
        }))
        setProgram(newProgram)
        setNameValue("")
        setDescriptionValue("")
    }
    const deleteGroup = ()=>{
        dispatch(myGroupActions.deleteGroup())
        navigation("/communities")
    }
    return (
        <form onSubmit={(e) => submit(e)} className={style.container}>
            {deleteWindow && <DeleteWindow delete={deleteGroup} close={()=>setDeleteWindow(false)}/>}            <Back path={type ? "/communities/groups" : "/communities/mygroup"}/>
            {image ? <img src={image ?? ""} className={style.image}/> : <div className={style.image}></div>}
            <button type="button" onClick={handleButtonClick} className={style.button}>
                <input className={style.hidden} ref={fileInputRef} type="file" accept="image/*"
                       onChange={handleImageUpload}/>
                {type ? <><img src="/photo.svg"/>
                    <div>Добавить фото</div>
                </> : <><img src="/pencilBlue.svg"/>
                    <div>Изменить фото</div>
                </>}
            </button>
            <div className={style.form}>
                <div className={cn({[style.relative]: validation.name})}>
                    <div className={style.title}>Название Группы</div>
                    <InputCreate className={style.input} error={validation.name} name="name" value={nameValue}
                                 onChange={(e) => changeValue(e)}
                                 placeholder={type ? "Группа 1" : group.name}/>
                    {validation.name && <ErrorMessage text="Поле не заполнено"/>}
                </div>
                <div>
                    <div className={style.title}>Описание группы</div>
                    <div className={cn(style.textarea, {
                        [style.focus]: focusTextarea,
                        [style.error]: validation.description
                    })}>
                        <div className={style.relative}>
                <textarea name="description" value={descriptionValue} onChange={(e) => changeValue(e)}
                          onFocus={() => setFocusTextarea(true)} onBlur={() => setFocusTextarea(false)}
                          placeholder={type ? "Например, расскажите, что будете выкладывать в группе" : group.description}></textarea>
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
            <div className={style.radio}>

                <RadioButton chosen={radio === "Публичная"} title="Публичная" setValue={setRadio}/>
                <RadioButton chosen={radio === "Закрытая"} title="Закрытая" setValue={setRadio}/>
                <div className={style.relative}>
                    <img onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}  src="/info.svg"/>
                    {showInfo && <Info/>}
                </div>
                {validation.radio && <ErrorMessage text="Поле не заполнено"/>}
            </div>
            {type ? <button className={cn(style.create, {
                [style.inactive]: nameValue.length === 0 || descriptionValue.length === 0 || radio === ""
            })}>Создать группу
            </button> : <><div className={style.buttons}>
                <button type="button" onClick={clean} className={style.cancel}> Отменить изменения</button>
                <button type="button" onClick={sendData} className={style.create}> Сохранить изменения</button>
            </div><button onClick={()=>setDeleteWindow(true)} className={style.delete}><img src="/basket_red.svg"/><div>Удалить группу</div></button></>}
        </form>
    )
}