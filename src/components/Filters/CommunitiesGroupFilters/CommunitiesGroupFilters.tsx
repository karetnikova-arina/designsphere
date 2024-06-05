import style from "./CommunitiesGroupFilters.module.scss"
import {SortWindow} from "../../windows/SortWindow/SortWindow.tsx";
import {useEffect, useState} from "react";
import {DIRECTION, PROGRAM} from "../../../data/sortList.ts";
import {ButtonWhite} from "../../buttons/ButtonWhite/ButtonWhite.tsx";

export function CommunitiesGroupFilters() {
    const [direction, setDirection] = useState(false)
    const [directionData, setDirectionData] = useState<{ value: string, chosen: boolean }[]>([])
    const [program, setProgram] = useState(false)
    const [programData, setProgramData] = useState<{ value: string, chosen: boolean }[]>([])

    useEffect(()=>{
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: false
        }))
        setDirectionData(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: false
        }))
        setProgramData(newProgram)
    },[])
    return(
        <div className={style.container}>
            <ButtonWhite onClick={() => {
                setDirection(prev => !prev)
                setProgram(false)
            }} chosen={direction} title="Направление" highlighting={false}/>
            {direction && <SortWindow setValues={setDirectionData} dataProps={directionData} left={false} right={false} type="many"/>}
            <ButtonWhite onClick={() => {
                setDirection(false)
                setProgram(prev => !prev)
            }} chosen={program} title="Программы" highlighting={false}/>
            {program && <SortWindow setValues={setProgramData} dataProps={programData} left={false} right={true} type="many"/>}

        </div>
    )
}