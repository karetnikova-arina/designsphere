import style from "./Chat.module.scss"
import cn from "classnames";
import {useEffect, useState} from "react";
import {ChatCard} from "../../../components/Cards/ChatCard/ChatCard.tsx";
import {Outlet} from "react-router-dom";
import {CHATS} from "../../../data/chats.ts";

export function Chat() {
    const [chats, setChats] = useState<typeof CHATS>([])
    const [inputFocus, setInputFocus] = useState(false);
    const [filter, setFilter] = useState("")
    useEffect(()=>{
        if(!filter.length){
            setChats(CHATS)
        }else{
            let newChats = []
            newChats = CHATS.filter((el)=> el.type===filter)
            setChats(newChats)
        }
    },[filter])
    const chose = (type: string)=>{
        if(filter===type){
            setFilter("")
        }else{
            setFilter(type)
        }
        console.log(filter)
    }
    return (
        <div className={style.container}>
            <div className={style.chats}>
                <div className={style.inputSearch}>
                    <input onFocus={() => setInputFocus(true)}
                           onBlur={() => setInputFocus(false)} className={style.input} placeholder="Поиск"/>
                    <div className={style.element}>
                        <button className={cn(style.search, {
                            [style.focusButton]: inputFocus
                        })}><img src="/search1.svg"/></button>
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button className={cn(style.button,{
                        [style.chosenButton]: filter==="personal"})} onClick={()=>chose("personal")}>Личные</button>
                    <button className={cn(style.button,{
                        [style.chosenButton]: filter==="group"})} onClick={()=>chose("group")}>Групповые</button>
                    <button className={cn(style.button,{
                        [style.chosenButton]: filter==="job"})} onClick={()=>chose("job")}>Рабочие</button>
                </div>
                <div className={style.chatList}>
                    {chats.map((el)=><ChatCard text={el.lastMessage} name={el.name} id={el.id} type={el.type as "job" | "group" | "personal"} status={el.status as "received" | "send" | "read" | "unread"}/>)}
                </div>
            </div>
            <div className={style.mainWindowDialog}>
                <Outlet/>
            </div>
        </div>
    )
}