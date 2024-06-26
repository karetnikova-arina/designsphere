import style from "./Chat.module.scss"
import cn from "classnames";
import {useEffect, useState} from "react";
import {ChatCard} from "../../../components/Cards/ChatCard/ChatCard.tsx";
import {Outlet} from "react-router-dom";
import {CHATS_ALL} from "../../../data/15chat_all.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {EMPLOYER_CHATS} from "../../../data/21employer_chats.ts";

export function Chat() {
    const [chats, setChats] = useState<typeof CHATS_ALL>([])
    const [inputFocus, setInputFocus] = useState(false);
    const [filter, setFilter] = useState("")
    const {values} = useSelector((s: RootState) => s.form)
    useEffect(() => {
        if (values.person === "Работодатель") {
            setChats(EMPLOYER_CHATS)
        } else {
            if (!filter.length) {
                setChats(CHATS_ALL)
            } else {
                let newChats = []
                newChats = CHATS_ALL.filter((el) => el.type === filter)
                setChats(newChats)
            }
        }

    }, [filter])
    const chose = (type: string) => {
        if (filter === type) {
            setFilter("")
        } else {
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
                {values.person !== "Работодатель" && <div className={style.buttonContainer}>
                    <button className={cn(style.button, {
                        [style.chosenButton]: filter === "personal"
                    })} onClick={() => chose("personal")}>Личные
                    </button>
                    <button className={cn(style.button, {
                        [style.chosenButton]: filter === "group"
                    })} onClick={() => chose("group")}>Групповые
                    </button>
                    <button className={cn(style.button, {
                        [style.chosenButton]: filter === "job"
                    })} onClick={() => chose("job")}>Рабочие
                    </button>
                </div>}
                <div className={style.chatList}>
                    {chats.map((el) => <ChatCard photo={el.photo} person_photo={el.nickname_photo} time={el.time}
                                                 text={el.lastMessage} name={el.name} id={el.id}
                                                 type={el.type as "job" | "group" | "personal"}
                                                 status={el.status as "received" | "send" | "read" | "unread"}/>)}
                </div>
            </div>
            <div className={style.mainWindowDialog}>
                <Outlet/>
            </div>
        </div>
    )
}