import style from "./Education.module.scss"
import {ArticleElement} from "../../../components/ArticleElement/ArticleElement.tsx";
import {ButtonTransperent} from "../../../components/buttons/ButtonTransperent/ButtonTransperent.tsx";
import {SortWindow} from "../../../components/windows/SortWindow/SortWindow.tsx";
import {useEffect, useState} from "react";
import {SaveButton} from "../../../components/buttons/SaveButton/SaveButton.tsx";
import {EducationalVideosElement} from "../../../components/EducationalVideosElement/EducationalVideosElement.tsx";
import {CardWebinar} from "../../../components/Cards/CardWebinar/CardWebinar.tsx";
import {DIRECTION, TOPICS, WEBINARSORT} from "../../../data/sortList.ts";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {Webinar} from "../../../components/parts/Webinar/Webinar.tsx";
import {DevelopmentWindow} from "../../../components/windows/DevelopmentWindow/DevelopmentWindow.tsx";
import {VideoArticle} from "../../../components/parts/Video-Article/Video-Article.tsx";
import {OBUCHENIE_STATYA, OBUCHENIE_VIDEO, OBUCHENIE_WEBINAR} from "../../../data/5obuchenie.ts";

export function Education() {
    const [sort, setSort] = useState(false)
    const [direction, setDirection] = useState(false)
    const [saved, setSaved] = useState(false)
    const [topic, setTopic] = useState(false)
    const [directionData, setDirectionData] = useState<{ value: string, chosen: boolean }[]>([])
    const [sortData, setSortData] = useState<{ value: string, chosen: boolean }[]>([])
    const [topicsData, setTopicsData] = useState<{ value: string, chosen: boolean }[]>([])
    const {webinar} = useSelector((s: RootState) => s.webinar)
    const [webinarWin, setWebinarWin]=useState(false)
    const [videoArticleWin, setVideoArticleWin]=useState("")
    const [development, setDevelopment] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(()=>{
        console.log(webinar)
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
        const newTopics = TOPICS.map((el) => ({
            value: el,
            chosen: false
        }))
        setTopicsData(newTopics)
    },[])

    return (
        <div className={style.container}>
            {development && <DevelopmentWindow close={()=>setDevelopment(false)} />}
            {webinarWin && <Webinar close={() => setWebinarWin(false)}/>}
            {videoArticleWin && <VideoArticle type={videoArticleWin} close={()=>setVideoArticleWin("")}/>}
            {(sort || direction) && <div onClick={() => {
                setSort(false)
                setDirection(false)
            }} className={style.background}></div>}
            <div className={style.element}>
                <div className={style.header}>
                    <div className={style.head}>Статьи</div>
                    <div className={style.header}>
                        <div className={style.save} onClick={() => setSaved(prev => !prev)}>
                            <SaveButton saved={saved}/>
                        </div>
                        <div className={style.add}><img src="/plus.svg"/>
                            <div onClick={()=>navigate("/education/publicationcreate")}>Добавить статью</div>
                        </div>
                    </div>
                </div>
                <div className={style.articleContainer}>
                    {OBUCHENIE_STATYA.map(el=><ArticleElement props={el} open={()=>setVideoArticleWin("article")}/>)}
                </div>
                <div className={style.addition}>Посмотреть все</div>
            </div>
            <div className={style.element}>
                <div className={style.header}>
                    <div className={style.head}>Обучающие видео</div>
                    <div className={style.header}>
                        <div className={style.save} onClick={() => setSaved(prev => !prev)}>
                            <SaveButton saved={saved}/>
                        </div>
                        <div className={style.add}><img src="/plus.svg"/>
                            <div onClick={()=>setDevelopment(true)}>Добавить видео</div>
                        </div>
                    </div>
                </div>
                <div className={style.articleContainer}>
                    {OBUCHENIE_VIDEO.map(el=> <EducationalVideosElement props={el} open={()=>setVideoArticleWin("video")}/>)}
                </div>
                <div className={style.addition}>Посмотреть все</div>
            </div>
            <div className={style.element}>
                <div className={style.header}>
                    <div className={style.head}>Вебинары</div>
                    <div className={style.header}>
                        <ButtonTransperent onClick={() => {
                            setSort(prev => !prev)
                            setDirection(false)
                            setTopic(false)
                        }} chosen={sort} title="Сортировка" highlighting={false}/>
                        {sort && <SortWindow dataProps={sortData} setValues={setSortData} left={false} right={false} type="one"/>}
                       <ButtonTransperent onClick={() => {
                            setTopic(prev => !prev)
                            setDirection(false)
                            setSort(false)
                        }} chosen={topic} title="Тема" highlighting={false}/>
                        {topic && <SortWindow dataProps={topicsData} setValues={setTopicsData} left={false} right={false} type="many"/>}
                        <ButtonTransperent onClick={() => {
                            setSort(false)
                            setDirection(prev => !prev)
                            setTopic(false)
                        }} chosen={direction} title="Направление" highlighting={false}/>
                        {direction && <SortWindow setValues={setDirectionData} dataProps={directionData} left={false} right={false} type="many"/>}
                        <NavLink to="/education/webinarcreate" className={style.schedule}>
                            <img src="/plus.svg"/>
                            <div>Запланировать</div>
                        </NavLink>
                    </div>
                </div>
                <div className={style.articleContainer}>
                    {OBUCHENIE_WEBINAR. map(el=> <CardWebinar open={()=>setWebinarWin(true)} props={el}/>)}
                </div>
                <div className={style.addition}>Посмотреть все</div>
            </div>
        </div>
    )
}