import style from "./SortWindow.module.scss"
import {useEffect, useState} from "react";
import cn from "classnames";


export function SortWindow({type, right, left, setValues, dataProps}: {
    type: string,
    right: boolean,
    left: boolean,
    setValues: (val: {value:string, chosen:boolean}[]) => void
    dataProps: {value:string, chosen: boolean}[]
}) {
    const [data, setData] = useState<{value:string, chosen:boolean}[]>(dataProps)

    function chose(el: string){
        const newChosen = [...data]; // Создайте новый массив, чтобы не изменять исходный массив напрямую.
        const index = newChosen.findIndex(item => item.value === el);
        if (index !== -1) {
            newChosen[index] = {
                ...newChosen[index],
                chosen: !newChosen[index].chosen,
            };
        }
        if(type==="one"){
            newChosen.forEach((e)=>{
                if(e.chosen && e.value!==el){
                    e.chosen = false
                }
            })
        }
        setData(newChosen);
        setValues(newChosen)
    }

    useEffect(() => {
        setData(dataProps)
    }, [dataProps])
    return (
        <div className={cn(style.container, {
            [style.right]: right,
            [style.left]: left,
            [style.all]: left && right,
        })}>
            {data?.map((el) => <div className={cn(el.chosen ? style.chosen : '')} key={el.value}
                                    onClick={() => chose(el.value)}>{el.value}</div>)}
        </div>
    )
}