import style from "./VacancyCard.module.scss";
import {SaveButton} from "../../buttons/SaveButton/SaveButton.tsx";
import {useState} from "react";
import {ResponseButton} from "../../buttons/ResponseButton/ResponseButton.tsx";
import {NavLink} from "react-router-dom";

export function VacancyCard() {
    const [saved, setSaved] = useState(false);
    const [response, setResponse] = useState(false);

    return (
        <NavLink to="/job/vacancy" className={style.container}>
            <div onClick={(e) => {
                e.preventDefault();
                setSaved((prev) => !prev)
            }} className={style.save}><SaveButton saved={saved}/>
            </div>
            <div className={style.title}>Title</div>
            <div className={style.salary}>Salary</div>
            <div className={style.row}>
                <div className={style.highlight}>Опыт работы</div>
                <div className={style.highlight}>Грейд</div>
                <div className={style.highlight}>График работы</div>
            </div>
            <div className={style.row}>
                <div className={style.nameCompany}>Название компании</div>
                <div className={style.city}>Город</div>
            </div>
            <ResponseButton onClick={e => {
                e.preventDefault();
                setResponse((prev) => !prev)
            }} response={response}/>
        </NavLink>
    );
}