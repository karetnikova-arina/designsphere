import style from "./Vacancy.module.scss"
import {SaveButton} from "../../../components/buttons/SaveButton/SaveButton.tsx";
import {ResponseButton} from "../../../components/buttons/ResponseButton/ResponseButton.tsx";
import {useState} from "react";
import {Back} from "../../../components/Back/Back.tsx";

export function Vacancy() {
    const [save, setSave] = useState(false)
    const [response, setResponse] = useState("response");
    const chose = ()=>{
        if(response==="response"){
            setResponse("responsed")
        }else if(response==="responsed"){
            setResponse("response")
        }
    }
    return (
        <div className={style.container}>
            <Back path="/job"/>
            <div className={style.title}>Web-дизайнер</div>
            <div className={style.salary}>100 000 ₽</div>
            <div className={style.pointsContainer}>
                <div className={style.points}>1-3 года</div>
                <div className={style.points}>Junior</div>
                <div className={style.points}>Гибридный</div>
                <div className={style.points}>Полная занятость</div>
            </div>
            <div className={style.buttonsContainer}>
                <ResponseButton onClick={()=>chose()} response={response}/>
                <div onClick={()=>setSave(prevState => !prevState)} className={style.save}>
                    <SaveButton saved={save}/>
                </div>
            </div>
            <div className={style.company}>
                <img src="/company.svg"/>
                <div className={style.companyInfo}>
                    <div className={style.companyTitle}>Web-дизайнер</div>
                    <div className={style.address}>Москва, Веткина улица, 4</div>
                </div>
            </div>
            <div>
                <div className={style.titleInfo}>О компании</div>
                <div className={style.infoText}>Мы амбициозная Ювелирная компания UVI Jewellery, входим в ТОП-50 интернет-магазинов РФ в категории Ювелирные изделия и предметы роскоши.
                    UVI работает с лучшими и крупными российскими ювелирными заводами и зарубежными брендами, а также выпускает собственные коллекции ювелирных изделий с натуральными камнями.
                    Быть важной составляющей знаменательных событий, создавать красоту с ювелирной точностью, легко! Стань ценной частью стабильной, надежной, успешной компании, и вместе мы сделаем жизнь ярче!
                    Миссия компании- быть рядом в главные моменты жизни!</div>
            </div>
            <div>
                <div className={style.titleInfo}>Требования</div>
                <div className={style.infoText}>Уверенный уровень владения Figma, Photoshop;
                    Развитое чувство стиля, композиции, типографики, теории цвета, знание принципов юзабилити;
                    Навыки графического дизайна;
                    Умение сделать обтравку объекта и легкую цветокоррекцию;
                    Понимание основ и главных принципов дизайна интерфейсов сайтов;
                    Понимание процессов веб разработки, знание принципов адаптивной верстки;
                    Опыт работы в области дизайна и проектирования интерфейсов UI/UX;
                    Коммуникативность, умение адекватно воспринимать замечания;
                    Умение аргументированно доносить свою точку зрения.</div>
            </div>
            <div>
                <div className={style.titleInfo}>Обязанности</div>
                <div className={style.infoText}>50% времени web дизайн, 50% дизайн баннеров;
                    Разрабатывать дизайн-макеты сайта;
                    Подготавливать дизайн-макеты к верстке;
                    Дизайн баннеров для сайта и рекламных кампаний;
                    Разработка лендингов для маркетинговых акций;
                    Взаимодействие с frontend-разработчиками и тестировщиками;
                    Усовершенствование и переработка текущих интерфейсов.</div>
            </div>
            <div>
                <div className={style.titleInfo}>Условия работы</div>
                <div className={style.infoText}>Оформление с первого рабочего дня с полным соблюдением ТК РФ;
                    График работы: 5/2 с 9:00 до 18:00 (удаленный формат работы);
                    ДМС;
                    Ювелирные подарки сотрудникам в честь возрастания стажа работы в команде;
                    Скидки на покупку ювелирных изделий;
                    Спортивные мероприятия: баскетбол, футбол, настольный теннис, беговые марафоны, плавание и танцы;
                    Стабильную выплату заработной платы два раза в месяц без задержек;
                    Корпоративная мобильная связь;
                    Участие в образовательных мероприятиях от лица компании;
                    Подарки в честь значимых событий в жизни сотрудников: День Рождения, подарки детям на Новый год;
                    Возможность постоянного профессионального роста: обучение и корпоративные тренинги по разным направлениям;
                    Оборудованная кухня внутри офиса с кофемашиной;
                    Просторный и комфортный офис в шаговой доступности от метро Марьина Роща.</div>
            </div>
            <div className={style.buttonsContainer}>
                <ResponseButton onClick={()=>chose()} response={response}/>
                <div onClick={()=>setSave(prevState => !prevState)} className={style.save}>
                    <SaveButton saved={save}/>
                </div>
            </div>
        </div>
    )
}