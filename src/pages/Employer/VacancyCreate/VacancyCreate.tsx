import {ChangeEvent, useEffect, useState} from "react";
import style from "./VacancyCreate.module.scss";
import {Back} from "../../../components/Back/Back.tsx";
import {RadioButton} from "../../../components/RadioButton/RadioButton.tsx";
import {CheckBox} from "../../../components/CheckBox/CheckBox.tsx";
import {SortWindow} from "../../../components/windows/SortWindow/SortWindow.tsx";
import {DIRECTION, PROGRAM} from "../../../data/sortList.ts";
import {InputCreate} from "../../../components/InputCteate/InputCreate.tsx";
import {Button} from "../../../components/buttons/Button/Button.tsx";
import {useNavigate} from "react-router-dom";

export function VacancyCreate() {
    const navigation = useNavigate()
    const [workExperience, setWorkExperience] = useState("")
    const [grade, setGrade] = useState("")
    const [workSchedule, setWorkSchedule] = useState("")
    const [busyness, setBusyness] = useState({"Полная": false, "Частичная": false, "Проектная": false})
    const [salaryExpectations, setSalaryExpectations] = useState<[string, string]>(["", ""])
    const [direction, setDirection] = useState<{ value: string, chosen: boolean }[]>([])
    const [program, setProgram] = useState<{ value: string, chosen: boolean }[]>([])
    const [inputs, setInputs] = useState({title: "", aboutCompany: "", requirements: "", duties: "", conditions: ""})
    useEffect(() => {
        const newDirection = DIRECTION.map((el) => ({
            value: el,
            chosen: false
        }))
        setDirection(newDirection)
        const newProgram = PROGRAM.map((el) => ({
            value: el,
            chosen: false
        }))
        setProgram(newProgram)
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
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const result = e.target.value
        setInputs({...inputs, [e.target.name]: result})
    }
    return (
        <div className={style.container}>
            <Back path="/vacancy"/>
            <div className={style.input}>
                <div className={style.title}>Название вакансии</div>
                <InputCreate value={inputs.title} onChange={(e) => changeValue(e)}
                             placeholder="Веб-дизайнер" className={style.input}
                             error={false} name="title"/>
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
                                     chosen={workExperience === "6 лет"}/>
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
                                onChange={e => setSalary(e)} name="left" placeholder="-"/>
                            <div>₽</div>
                        </div>
                        <div className={style.salary}>
                            <div>до</div>
                            <input value={salaryExpectations[1]} onChange={e => setSalary(e)} name="right"
                                   placeholder="-"/>
                            <div>₽</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={style.title}>Направление</div>
                <div className={style.sort}>
                    <SortWindow dataProps={direction} setValues={setDirection} type="direction" right={true}
                                left={true}/>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>Программы</div>
                <div className={style.sort}>
                    <SortWindow dataProps={program} setValues={setProgram} type="program" right={true} left={true}/>
                </div>
            </div>
            <div className={style.input}>
                <div className={style.title}>О компании</div>
                <InputCreate value={inputs.aboutCompany} onChange={(e) => changeValue(e)}
                             placeholder="Кратко рассчкажите, чем занимается ваша компания" className={style.input}
                             error={false} name="aboutCompany"/>
            </div>
            <div className={style.input}>
                <div className={style.title}>Требования</div>
                <InputCreate value={inputs.requirements} onChange={(e) => changeValue(e)}
                             placeholder="Опишите требования к кандидату" className={style.input} error={false}
                             name="requirements"/>
            </div>
            <div className={style.input}>
                <div className={style.title}>Обязанности</div>
                <InputCreate value={inputs.duties} onChange={(e) => changeValue(e)}
                             placeholder="Расскажите, чем будет заниматься кандидат" className={style.input}
                             error={false}
                             name="duties"/>
            </div>
            <div className={style.input}>
                <div className={style.title}>Условия работы</div>
                <InputCreate value={inputs.conditions} onChange={(e) => changeValue(e)}
                             placeholder="Опишите, как будет проходить работа в компании" className={style.input}
                             error={false} name="conditions"/>
            </div>
            <Button onClick={()=>navigation("/vacancy")} isValid={true}>Разместить вакансию</Button>
        </div>
    )
}