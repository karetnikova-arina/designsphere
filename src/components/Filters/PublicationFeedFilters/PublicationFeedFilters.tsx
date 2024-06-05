import style from "./PublicationFeedFilters.module.scss"
import {ButtonTransperent} from "../../buttons/ButtonTransperent/ButtonTransperent.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {useEffect, useState} from "react";
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {SortWindow} from "../../windows/SortWindow/SortWindow.tsx";
import {DIRECTION, PROGRAM, SORT} from "../../../data/sortList.ts";

export function PublicationFeedFilters() {
    const {jwt} = useSelector((s: RootState) => s.user)
    const [window, setWindow] = useState("")
    const [sort, setSort] = useState(false)
    const [direction, setDirection] = useState(false)
    const [program, setProgram] = useState(false)
    const [directionData, setDirectionData] = useState<{ value: string, chosen: boolean }[]>([])
    const [sortData, setSortData] = useState<{ value: string, chosen: boolean }[]>([])
    const [programData, setProgramData] = useState<{ value: string, chosen: boolean }[]>([])

    useEffect(()=>{
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: false
        }))
        setDirectionData(newDirection)
        const newSort = SORT.map((el) => ({
            value: el,
            chosen: false
        }))
        setSortData(newSort)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: false
        }))
        setProgramData(newProgram)
    },[])
    const click = () => {
        console.log(1)
        if (!jwt.length) {
            setWindow("Чтобы воспользоваться фильтром, необходимо авторизоваться")
        }
    }
    const close = () => {
        setWindow("")
    }
    return (
        <div className={style.container}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            {(sort || direction || program) && <div onClick={() => {
                setSort(false)
                setDirection(false)
                setProgram(false)
            }} className={style.background}></div>}
            <div className={style.group}>
                <ButtonTransperent chosen={false} className={style.choosen} onClick={click} title="Мои подписки"
                                   highlighting={true}/>
                <ButtonTransperent chosen={false} onClick={click} title="Сохраненные" highlighting={true}/>
            </div>
            <ButtonTransperent onClick={() => {
                setSort(prev => !prev)
                setDirection(false)
                setProgram(false)
            }} chosen={sort} title="Сортировка" highlighting={false}/>
            {sort && <SortWindow setValues={setSortData} dataProps={sortData}  left={false} right={false} type="one"/>}
            <div className={style.group}>
                <ButtonTransperent onClick={() => {
                    setDirection(prev => !prev)
                    setSort(false)
                    setProgram(false)
                }} chosen={direction} title="Направления" highlighting={false}/>
                {direction && <SortWindow dataProps={directionData} setValues={setDirectionData} left={false} right={false} type="direction"/>}
                <ButtonTransperent onClick={() => {
                    setProgram(prev => !prev)
                    setSort(false)
                    setDirection(false)
                }} chosen={program} title="Программы" highlighting={false}/>
                {program && <SortWindow setValues={setProgramData} dataProps={programData} left={false} right={true} type="program"/>}
            </div>
        </div>
    )
}