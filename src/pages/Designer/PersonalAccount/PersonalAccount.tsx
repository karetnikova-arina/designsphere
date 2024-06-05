import style from "./PersonalAccount.module.scss"
import {CardMyGroup} from "../../../components/Cards/CardMyGroup/CardMyGroup.tsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {userActions} from "../../../store/userSlice.tsx";
import {ProjectInAccount} from "../../../components/ProjectInAccount/ProjectInAccount.tsx";

export function PersonalAccount() {
    const navigation = useNavigate()
    const location = useLocation()
    const [card, setCard] = useState(false)
    const [windowCard, setWindowCard] = useState(false)
    const {user} = useSelector((s: RootState) => s.user)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(()=>{
        setCard(location.pathname==="/personalaccount")
    }, [location])
    const exit = ()=>{
        dispatch(userActions.exit())
        navigation("/")
    }
    return(
        <div className={style.container}>
            {windowCard && <ProjectInAccount close={() => setWindowCard(false)}/>}
            <div className={style.titleInfo}>
                <img className={style.image} src={user.image}/>
                <div className={style.info}>
                    <div className={style.nikname}>{user.nikname}</div>
                    <div className={style.name}>{user.name} {user.surname}</div>
                    <div className={style.city}>{user.city}</div>
                    <div className={style.points}>
                        {user.directions.length!==0 && user.directions.map(el=><div>{el}</div>)}
                        {user.programs.length!==0 && user.programs.map(el=><div>{el}</div>)}
                    </div>
                    {location.pathname==="/personalaccount" ? <div className={style.buttons}>
                        <NavLink to="/personalaccount/edit" className={style.blueButton}>
                            <img src="/user_white.svg"/>
                            <div>Личные данные</div>
                        </NavLink>
                        <NavLink to="/personalaccount/jobsearch" className={style.blueButton}>
                            <img src="/computer.svg"/>
                            <div>Данные для поиска работы</div>
                        </NavLink>
                        <button className={style.transparentButton}>
                            <img src="/settings.svg"/>
                            <div>Настройки</div>
                        </button>
                        <button onClick={exit} className={style.transparentButton}>
                            <img src="/exit.svg"/>
                            <div>Выйти</div>
                        </button>
                    </div> : <button className={style.blueButton}>
                        <img src="/user_add.svg"/>
                        <div>Подписаться</div>
                    </button>}

                </div>
            </div>
            <div className={style.portfolio}>Портфолио</div>
            {location.pathname==="/personalaccount" && <button className={style.transparentButton}>
                <img src="/plus_blue.svg"/>
                <div>Добавить новую работу</div>
            </button>}
            <div className={style.cards}>
                <CardMyGroup onClick={()=>setWindowCard(true)} type={card}/>
                <CardMyGroup onClick={()=>setWindowCard(true)} type={card}/>
                <CardMyGroup onClick={()=>setWindowCard(true)} type={card}/>
                <CardMyGroup onClick={()=>setWindowCard(true)} type={card}/>
                <CardMyGroup onClick={()=>setWindowCard(true)} type={card}/>
                <CardMyGroup onClick={()=>setWindowCard(true)} type={card}/>
            </div>
        </div>
    )
}