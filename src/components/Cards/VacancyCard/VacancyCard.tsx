import style from "./VacancyCard.module.scss";
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {useEffect, useState} from "react";
import {ResponseButton} from "../../buttons/ResponseButton/ResponseButton.tsx";
import {NavLink} from "react-router-dom";
import {RABOTA_INTERFACE} from "../../../data/6rabota.ts";

interface VacancyCardProps {
    props: RABOTA_INTERFACE,
    save: boolean
    button: string
}
export function VacancyCard({props, save, button}: VacancyCardProps) {
    const [saved, setSaved] = useState(false);
    const [response, setResponse] = useState("");
    useEffect(()=>{
        setSaved(save)
        setResponse(button)
    },[])
    const chose = ()=>{
        if(response==="response"){
            setResponse("responsed")
        }else if(response==="responsed"){
            setResponse("response")
        }
    }
    return (
        <NavLink to="/job/vacancy" className={style.container}>
            <div onClick={(e) => {
                e.preventDefault();
                setSaved((prev) => !prev)
            }} className={style.save}><SaveButton saved={saved}/>
            </div>
            <div className={style.title}>{props.title}</div>
            <div className={style.salary}>{props.salary}</div>
            <div className={style.row}>
                <div className={style.highlight}>{props.dexperience}</div>
                <div className={style.highlight}>{props.grade}</div>
            </div>
            <div className={style.row}>
                <div className={style.nameCompany}>{props.name_company}</div>
                <div className={style.city}>{props.city}</div>
            </div>
            <ResponseButton onClick={e => {
                e.preventDefault();
                chose()
            }} response={response}/>
        </NavLink>
    );
}