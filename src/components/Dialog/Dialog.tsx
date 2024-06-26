import style from "./Dialog.module.scss"
import {MessageCard} from "../Cards/MessageCard/MessageCard.tsx";
import {GROUPMESSAGES, JOBMESSAGES, Messages} from "../../data/messages.ts";
import cn from "classnames";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

interface DialogProps {
    type: "personal" | "group" | "job"
}

export function Dialog(props: DialogProps) {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [state, setState] = useState<typeof Messages | typeof GROUPMESSAGES | typeof JOBMESSAGES>([])
    const [inputValue, setInputValue] = useState("")
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [personalInfo, setPersonalInfo] = useState({image: "", name: ""})
    const location = useLocation()
    const {values} = useSelector((s: RootState) => s.form)
    useEffect(() => {
        if(values.person === "Работодатель"){
            setState(JOBMESSAGES)
            setPersonalInfo({image: "/images/42.jpg", name: "Арина Каретникова"})
        }else {
            if (props.type === "personal") {
                setState(Messages)
                setPersonalInfo({image: "/images/2.jpg", name: "maria-fil"})
            } else if (props.type === "group") {
                setState(GROUPMESSAGES)
                setPersonalInfo({image: "/images/44.jpg", name: "Проект SpeakerProfi"})
            } else if (props.type === "job") {
                setState(JOBMESSAGES)
                setPersonalInfo({image: "/images/47.jpg", name: "UVI Jewellery"})
            }
        }
    }, [location.pathname])
    useEffect(() => {
        if (messagesEndRef.current !== null) {
            messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [state, inputValue])
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const send = () => {
        if (messagesEndRef.current !== null) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (inputValue.length) {
            const newState = state
            newState.push({
                person: "me",
                text: inputValue,
                date: new Date(),
                read: false,
                type: ""
            })
            console.log(newState)
            setState(newState)
            setInputValue("")
        }
    }
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            //setImage(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            //setImage(null);
        }
    };
    const refuctor = () => {
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        const nowDate = new Date()
        const result = []
        for (let i = 0; i < state.length; i++) {
            let dateString = ""
            if (i === 0 || state[i].date.getDate() > state[i - 1].date.getDate()) {
                if (state[i].date.getFullYear() !== nowDate.getFullYear()) {
                    dateString = state[i].date.getDate().toString() + ' ' + months[state[i].date.getMonth()] + " " + state[i].date.getFullYear().toString()
                } else if (state[i].date.getMonth() !== nowDate.getMonth() || state[i].date.getDate() !== nowDate.getDate()) {
                    dateString = state[i].date.getDate().toString() + ' ' + months[state[i].date.getMonth()]
                } else {
                    dateString = "Сегодня"
                }
                result.push(<div className={style.day}>{dateString}</div>)
            }
            if (props.type === "job" && state[i].type === "first") {
                if (values.person !== "Работодатель") {
                    if (state[i].person === "me") {
                        result.push(<div className={style.response}><img src="/jobResponse.svg"/>
                            <div>Отклик отправлен</div>
                        </div>)
                    } else {
                        result.push(<div className={style.invite}><img src="/jobInvite.svg"/>
                            <div>Вас пригласили</div>
                        </div>)
                    }
                } else {
                    if (state[i].person === "me") {
                        result.push(<div className={cn(style.response, style.response_employer)}><img src="/jobResponse.svg"/>
                            <div>Отклик на вакансию</div>
                        </div>)
                    } else {
                        result.push(<div className={cn(style.invite, style.invite_employer)}><img src="/jobInvite.svg"/>
                            <div>Вы пригласили</div>
                        </div>)
                    }
                }
            }
            result.push(<MessageCard type={props.type} person={state[i].person} text={state[i].text}
                                     read={state[i].read ?? false}
                                     data={`${state[i].date.getHours()}:${state[i].date.getMinutes() < 10 ? "0" : ""}${state[i].date.getMinutes()}`}/>)
        }
        return result
    }
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.info}>
                    <div className={style.name}>
                        <img src={personalInfo.image}/>
                        <div>{personalInfo.name
                        }</div>
                    </div>
                    {props.type === "personal" && <div>Онлайн</div>}
                    {props.type === "group" && <div>5 учасников</div>}
                    {props.type === "job" &&
                        <NavLink className={style.vacancy} to="/job/vacancy">Перейти к вакансии</NavLink>}
                </div>
                <div className={style.buttons}>
                    <button><img src="/searchDialog.svg"/></button>
                    <button><img src="/file.svg"/></button>
                    {props.type !== "job" && <button><img src="/notificationDialog.svg"/></button>}
                    {values.person !== "Работодатель" && <button><img src="/basket.svg"/></button>}
                    {props.type !== "job" && <button><img src="/deleteUser.svg"/></button>}
                </div>
            </div>
            <div className={style.overflow}>
                <div className={style.messages}>
                    {refuctor()}
                    <div ref={messagesEndRef}/>
                </div>
            </div>
            <div className={cn(style.inputSearch, style.sendInput)}>
                <input value={inputValue} onChange={event => setInputValue(event.target.value)} className={style.input}
                       placeholder="Напишите сообщение" autoFocus={true}/>
                <img onClick={send} className={style.send} src="/sendMessage.svg"/>
                <div onClick={handleButtonClick} className={style.file}>
                    <input className={style.hidden} ref={fileInputRef} type="file"
                           onChange={handleImageUpload}/>
                    <img src="/fileMessage.svg"/>
                </div>
            </div>
        </div>
    )
}
