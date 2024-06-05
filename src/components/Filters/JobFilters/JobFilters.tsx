import style from "./JobFilters.module.scss"
import {NavLink} from "react-router-dom";
import cn from "classnames";

import {ButtonTransperent} from "../../buttons/ButtonTransperent/ButtonTransperent.tsx";
import {useEffect, useState} from "react";
import {SortWindow} from "../../windows/SortWindow/SortWindow.tsx";
import {STATUS} from "../../../data/sortList.ts";

export function JobFilters() {
    const [chose, setChose] = useState(false)
    const [save, setSave] = useState(false)
    const [statusData, setStatusData] = useState<{ value: string, chosen: boolean }[]>([])
    useEffect(()=>{
        const newStatus = STATUS.map((el) => ({
            value: el,
            chosen: false
        }))
        setStatusData(newStatus)
    },[])
    return (
        <div className={style.container}>
            <div className={style.part}>
                <NavLink to="/job/responce" className={({isActive}) => cn(style.button, {
                    [style.chose]: isActive
                })}>
                    <div>Отклики</div>
                    <div>123</div>
                </NavLink>
                <NavLink to="/job/invitation" className={({isActive}) => cn(style.button, {
                    [style.chose]: isActive
                })}>
                    <div>Приглашения</div>
                    <div>123</div>
                </NavLink>
                <button onClick={()=>setSave(prev=>!prev)} className={cn(style.save, {
                    [style.choseSave]: save
                })}><img src="/saveWhite.svg"/></button>
            </div>
            <div className={style.part}>
                <button className={style.data}>Мои данные</button>
                <ButtonTransperent onClick={()=>setChose(prev=>!prev)} title="Статус" highlighting={false} chosen={chose}/>
                {chose && <SortWindow type="one" dataProps={statusData} setValues={setStatusData} right={true} left={false}/>}
            </div>
        </div>
    )
}