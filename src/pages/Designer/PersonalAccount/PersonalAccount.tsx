import style from "./PersonalAccount.module.scss"
import {CardMyGroup} from "../../../components/Cards/CardMyGroup/CardMyGroup.tsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {userActions} from "../../../store/userSlice.tsx";
import {ProjectInAccount} from "../../../components/ProjectInAccount/ProjectInAccount.tsx";
import {PORTFOLIO, USER_PROFILE} from "../../../data/17user_profile.ts";
import {PORTFOLIO_LK, USER_PROFILE_LK} from "../../../data/18lk.ts";

export function PersonalAccount() {
    const navigation = useNavigate()
    const location = useLocation()
    const [card, setCard] = useState(false)
    const [windowCard, setWindowCard] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const [portfolio, setPortfolio] = useState<typeof PORTFOLIO>([])
    const [personalInfo, setPersonalInfo] = useState<typeof USER_PROFILE_LK>({
        id: '1',
        nickname: 'arinaaa_kk',
        name: 'Арина Каретникова',
        nickname_photo: '42',
        city: 'Москва',
        direction: ['UX/UI дизайн'],
        programm: ['Figma, Photoshop', 'Illustrator, Tilda']
    })
    useEffect(() => {
        window.scrollTo(0, 0);
        if(location.pathname!=="/personalaccount") {
            setPortfolio(PORTFOLIO)
            setPersonalInfo(USER_PROFILE)
        }else {
            setPortfolio(PORTFOLIO_LK)
            setPersonalInfo(USER_PROFILE_LK)
        }
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
                <img className={style.image} src={`/images/${personalInfo.nickname_photo}.jpg`}/>
                <div className={style.info}>
                    <div className={style.nikname}>{personalInfo.nickname}</div>
                    <div className={style.name}>{personalInfo.name}</div>
                    <div className={style.city}>{personalInfo.city}</div>
                    <div className={style.points}>
                        {personalInfo.direction && personalInfo.direction.map(el=><div>{el}</div>)}
                        {personalInfo.programm && personalInfo.programm.map(el=><div>{el}</div>)}
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
                <div onClick={()=>navigation("/education/publicationcreate")}>Добавить новую работу</div>
            </button>}
            <div className={style.cards}>
                {portfolio. map(el=><CardMyGroup props={el} onClick={()=>setWindowCard(true)} type={card}/>)}
            </div>
        </div>
    )
}