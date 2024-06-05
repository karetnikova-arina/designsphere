import style from "./Card.module.scss"
import {NotificationWindow} from "../../windows/NotificationWindow/NotificationWindow.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {ButtonSubscribe} from "../../buttons/ButtonSubscribe/ButtonSubscribe.tsx";
import {ButtonWebinar} from "../../buttons/ButtonWebinar/ButtonWebinar.tsx";
import {LikeButton} from "../../buttons/LikeButton/LikeButton.tsx";

export function Card({type}: { type: string }) {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const [window, setWindow] = useState("")
    const {jwt} = useSelector((s: RootState) => s.user)
    const [subscribe, setSubscribe] = useState(true)
    const [condition, setCondition] = useState("Записаться")

    const click = (type: string) => {
        if (!jwt.length) {
            if (type === "save") {
                setWindow("Чтобы сохранить проект, необходимо авторизоваться")
            } else if (type === "like") {
                setWindow("Чтобы оценить проект, необходимо авторизоваться")
            }
        } else {
            if (type === "save") {
                setSaved(prev => !prev)
            } else {
                setLiked(prev => !prev)
            }
        }
    }
    const close = () => {
        setWindow("")
    }
    const signUp = (type: boolean)=>{
        console.log(type)
        if(type){
            if(condition==="Записаться"){
                setCondition("Записан")
            }else {
                setCondition("Записаться")
            }
        }
    }
    return (
        <div className={style.container}>
            {window.length > 0 && <NotificationWindow close={close} text={window}/>}
            <div className={style.card}>
                <div className={style.cardTop}>
                    <div className={style.direction}>Направление дизайна</div>
                    {type === "publication" && <div onClick={() => click("save")} className={style.favourites}><img
                        src={saved ? "/saved.svg" : "/save.svg"} alt="Избранное"/></div>}
                    {type === "group" && <div className={style.direction}>Программа</div>}
                </div>
                <div className={style.name}>Название проекта</div>
            </div>
            <div className={style.information}>
                {(type === "publication" || type === "webinar") && <>
                    <div className={style.element}>
                        <img className={style.avatar}/>
                        <div className={style.nikname}>Никнейм</div>
                    </div>
                    {type === "publication" && <div className={style.stats}>
                        <div className={style.element}>
                            <img className={style.stat} src="/message.svg"/>
                            <div>123</div>
                        </div>
                        <div onClick={()=> click("like")} className={style.element}>
                            <LikeButton liked={liked}/>
                            <div>123</div>
                        </div>
                    </div>}
                </>}
                {type === "group" && <>
                    <ButtonSubscribe subscribe={subscribe} setSubscribe={() => setSubscribe(prev => !prev)}/>
                    <div className={style.element}>
                        <img className={style.stat}
                             src="/group.svg"/>
                        <div>123</div>
                    </div>
                </>}
            </div>
            {type === "webinar" &&
                <div className={style.information}>
                <div className={style.stats}>
                    <div className={style.element}>
                        <img src="/calendar.svg"/>
                        <div>03.10.2024</div>
                    </div>
                    {condition!=="Посмотреть запись" && <div className={style.element}>
                        <img src="/clock.svg"/>
                        <div>15:00</div>
                    </div>}
                </div>
                <ButtonWebinar onClick={()=>signUp(condition!=="Посмотреть запись")} text={condition}/>
            </div>}
        </div>
    )
}