import style from "./CommunitiesFriendsFilters.module.scss"
import {SortWindow} from "../../windows/SortWindow/SortWindow.tsx";
import {useEffect, useState} from "react";
import {DIRECTION, GENDER, WEBINARSORT} from "../../../data/sortList.ts";
import {SortWindowChange} from "../../windows/SortWindowChange/SortWindowChange.tsx";
import {ButtonWhite} from "../../buttons/ButtonWhite/ButtonWhite.tsx";

export function CommunitiesFriendsFilters() {
    const [sort, setSort] = useState(false)
    const [direction, setDirection] = useState(false)
    const [gender, setGender] = useState(false)
    const [city, setCity] = useState(false)
    const [age, setAge] = useState(false)
    const [directionData, setDirectionData] = useState<{ value: string, chosen: boolean }[]>([])
    const [sortData, setSortData] = useState<{ value: string, chosen: boolean }[]>([])
    const [genderData, setGenderData] = useState<{ value: string, chosen: boolean }[]>([])

    useEffect(()=>{
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: false
        }))
        setDirectionData(newDirection)
        const newSort = WEBINARSORT.map((el) => ({
            value: el,
            chosen: false
        }))
        setSortData(newSort)
        const newGender = GENDER.map((el) => ({
            value: el,
            chosen: false
        }))
        setGenderData(newGender)
    },[])
    return(
        <div className={style.container}>
            <ButtonWhite onClick={() => {
                setSort(false)
                setAge(false)
                setDirection(false)
                setGender(false)
                setCity(prev => !prev)
            }} chosen={city} title="Город" highlighting={false}/>
            {city && <SortWindowChange left={true} right={false}>
                <input className={style.inputCity}  placeholder="Введите название города" />
            </SortWindowChange>}
            <ButtonWhite onClick={() => {
                setSort(false)
                setDirection(false)
                setGender(false)
                setCity(false)
                setAge(prev => !prev)
            }} chosen={age} title="Возраст" highlighting={false}/>
            {age && <SortWindowChange left={false} right={false}>
                <div className={style.ageContainer}>
                    <div className={style.ageElement}>
                        <div>от</div>
                        <input className={style.inputAge} placeholder="16"/>
                    </div>
                    <div className={style.ageElement}>
                        <div>до</div>
                        <input className={style.inputAge} placeholder="99"/>
                    </div>
                </div>
            </SortWindowChange>}
            <ButtonWhite onClick={() => {
                setSort(false)
                setAge(false)
                setDirection(false)
                setCity(false)
                setGender(prev => !prev)
            }} chosen={gender} title="Пол" highlighting={false}/>
            {gender && <SortWindow setValues={setGenderData} dataProps={genderData} left={false} right={false} type="one"/>}

            <ButtonWhite onClick={() => {
                setSort(prev => !prev)
                setAge(false)
                setDirection(false)
                setGender(false)
                setCity(false)
            }} chosen={sort} title="Сортировка" highlighting={false}/>
            {sort && <SortWindow dataProps={sortData} setValues={setSortData} left={false} right={false} type="one"/>}
            <ButtonWhite onClick={() => {
                setSort(false)
                setAge(false)
                setGender(false)
                setCity(false)
                setDirection(prev => !prev)
            }} chosen={direction} title="Направление" highlighting={false}/>
            {direction && <SortWindow setValues={setDirectionData} dataProps={directionData} left={false} right={true} type="many"/>}

        </div>
    )
}