import style from "./JobFilters.module.scss"
import cn from "classnames";

import {ButtonTransperent} from "../../buttons/ButtonTransperent/ButtonTransperent.tsx";
import {useEffect, useState} from "react";
import {SortWindow} from "../../windows/SortWindow/SortWindow.tsx";
import {STATUS} from "../../../data/sortList.ts";

export function JobFilters({value, setValue}: {value: string, setValue: (value: string)=>void}) {
    const [chose, setChose] = useState(false)
    const [statusData, setStatusData] = useState<{ value: string, chosen: boolean }[]>([])
    useEffect(()=>{
        const newStatus = STATUS.map((el) => ({
            value: el,
            chosen: false
        }))
        setStatusData(newStatus)
    },[])
    const choseVal = (str: string)=>{
        if(str === value){
            setValue('')
        }else {
            setValue(str)
        }
    }
    return (
        <div className={style.container}>
            <div className={style.part}>
                <button onClick={()=>choseVal("response")} className={cn(style.button, {
                    [style.chose]: value==="response"
                })}>
                    <div>Отклики</div>
                    <div>123</div>
                </button>
                <button onClick={()=>choseVal("invite")} className={cn(style.button, {
                    [style.chose]:value==="invite"
                })}>
                    <div>Приглашения</div>
                    <div>123</div>
                </button>
                <button onClick={()=>choseVal("save")} className={cn(style.save, {
                    [style.choseSave]: value==="save"
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