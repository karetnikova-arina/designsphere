import style from "./JobData.module.scss"
import {RadioButton} from "../../../components/RadioButton/RadioButton.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {CheckBox} from "../../../components/CheckBox/CheckBox.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {userActions} from "../../../store/userSlice.tsx";
import {useNavigate} from "react-router-dom";
import cn from "classnames";
import {Back} from "../../../components/Back/Back.tsx";

export function JobData() {
    const navigation = useNavigate()
    const [workExperience, setWorkExperience] = useState("")
    const [grade, setGrade] = useState("")
    const [workSchedule, setWorkSchedule] = useState("")
    const [busyness, setBusyness] = useState({"Полная": false, "Частичная": false, "Проектная": false})
    const [salaryExpectations, setSalaryExpectations] = useState<[string, string]>(["", ""])
    const [resume, setResume] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>()
    const {job} = useSelector((s: RootState) => s.user)

    useEffect(() => {
        clean()
    }, [])

    const setSalary = (e: ChangeEvent<HTMLInputElement>) => {
        const mass: [string, string] = [...salaryExpectations]
        if (e.target.name === "left") {
            mass[0] = e.target.value
            setSalaryExpectations(mass)
        } else {
            mass[1] = e.target.value
            setSalaryExpectations(mass)
        }
    }
    const clean = () => {
        setWorkExperience(job.workExperience)
        setWorkSchedule(job.workSchedule)
        setGrade(job.grade)
        setResume(job.resume)
        setSalaryExpectations(job.salaryExpectations)
        setBusyness(job.busyness)
    }
    const sendData = () => {
        dispatch(userActions.updateDataJob({
            workExperience: workExperience,
            grade: grade,
            workSchedule: workSchedule,
            salaryExpectations: salaryExpectations,
            busyness: busyness,
            resume: resume
        }))
        navigation("/personalaccount")
    }
    return (
        <div className={style.container}>
            <Back path="/personalaccount"/>
            <div className={style.title_container}>
                <div className={style.title}>Данные для поиска работы</div>
                <div className={style.info}>
                    <img src="/info_grey.svg"/>
                    <div>Данные видят только работодатели</div>
                </div>
            </div>
            <div className={style.form}>
                <div className={style.element}>
                    <div>Опыт работы</div>
                    <div className={style.points}>
                        <RadioButton name="workExperience" title="Нет опыта" setValue={setWorkExperience}
                                     chosen={workExperience === "Нет опыта"}/>
                        <RadioButton name="workExperience" title="Менее 1 года" setValue={setWorkExperience}
                                     chosen={workExperience === "Менее 1 года"}/>
                        <RadioButton name="workExperience" title="1-3 года" setValue={setWorkExperience}
                                     chosen={workExperience === "1-3 года"}/>
                        <RadioButton name="workExperience" title="3-6 лет" setValue={setWorkExperience}
                                     chosen={workExperience === "3-6 лет"}/>
                        <RadioButton name="workExperience" title="6 лет" setValue={setWorkExperience}
                                     chosen={job.workExperience === "6 лет"}/>
                    </div>
                </div>
                <div className={style.element}>
                    <div>Грейд</div>
                    <div className={style.points}>
                        <RadioButton name="grade" title="Стажер" setValue={setGrade}
                                     chosen={grade === "Стажер"}/>
                        <RadioButton name="grade" title="Junior" setValue={setGrade}
                                     chosen={grade === "Junior"}/>
                        <RadioButton name="grade" title="Middle" setValue={setGrade}
                                     chosen={grade === "Middle"}/>
                        <RadioButton name="grade" title="Senior" setValue={setGrade}
                                     chosen={grade === "Senior"}/>
                        <RadioButton name="grade" title="Lead" setValue={setGrade}
                                     chosen={grade === "Lead"}/>
                    </div>
                </div>
                <div className={style.element}>
                    <div>График работы</div>
                    <div className={style.points}>
                        <CheckBox checked={busyness["Полная"]}
                                  setValue={() =>
                                      setBusyness(prevState => ({
                                          ...prevState,
                                          "Полная": !prevState["Полная"]
                                      }))
                                  }
                                  id={"Полная"}>Полная</CheckBox>
                        <CheckBox checked={busyness["Частичная"]} setValue={() => setBusyness(prevState => ({
                            ...prevState,
                            "Частичная": !prevState["Частичная"]
                        }))} id={"Частичная"}>Частичная</CheckBox>
                        <CheckBox checked={busyness["Проектная"]} setValue={() => setBusyness(prevState => ({
                            ...prevState,
                            "Проектная": !prevState["Проектная"]
                        }))} id={"Проектная"}>Проектная</CheckBox>
                    </div>
                </div>
                <div className={style.element}>
                    <div>Занятость</div>
                    <div className={style.points}>
                        <RadioButton name="workSchedule" title="Любой" setValue={setWorkSchedule}
                                     chosen={workSchedule === "Любой"}/>
                        <RadioButton name="workSchedule" title="Офис" setValue={setWorkSchedule}
                                     chosen={workSchedule === "Офис"}/>
                        <RadioButton name="workSchedule" title="Удаленная" setValue={setWorkSchedule}
                                     chosen={workSchedule === "Удаленная"}/>
                        <RadioButton name="workSchedule" title="Гибридный" setValue={setWorkSchedule}
                                     chosen={workSchedule === "Гибридный"}/>
                    </div>
                </div>
                <div className={style.salary_container}>
                    <div className={style.salary_title}>Зарплатные ожидания</div>
                    <div className={style.text}>
                        <div className={style.salary}>
                            <div>от</div>
                            <input
                                value={salaryExpectations[0]}
                                onChange={e => setSalary(e)} name="left" placeholder={job.salaryExpectations[0]}/>
                            <div>₽</div>
                        </div>
                        <div className={style.salary}>
                            <div>до</div>
                            <input value={salaryExpectations[1]} onChange={e => setSalary(e)} name="right"
                                   placeholder={job.salaryExpectations[1] === "" ? "-" : job.salaryExpectations[1]}/>
                            <div>₽</div>
                        </div>
                    </div>
                </div>
                <div className={style.element}>
                    <div>Мое резюме</div>
                    <div className={style.buttons}>
                        <button className={style.button_load}><img src="/checkmark_white.svg"/>
                            <div>Загружено</div>
                        </button>
                        <button className={style.button_basket}><img src="/basket.svg"/></button>
                    </div>
                </div>
                <div className={cn(style.buttons, style.center)}>
                    <button type="button" onClick={clean} className={style.cancel}> Отменить изменения</button>
                    <button type="button" onClick={sendData} className={style.create}> Сохранить изменения</button>
                </div>
            </div>
        </div>
    )
}