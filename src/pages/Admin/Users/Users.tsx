import style from "./Users.module.scss"
import {NavLink} from "react-router-dom";
import cn from "classnames";
import {InputSearch} from "../../../components/InputSearch/InputSearch.tsx";
import user from "../../../assets/user_admin.png"
import {useState} from "react";
import {CheckBoxButton} from "../../../components/buttons/CheckBoxButton/CheckBoxButton.tsx";
import {ADMIN_PAGE} from "../../../data/22admin.ts";

export function Users() {
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.menu}>
                <img src="/logo_white.svg"/>
                <div className={style.links}>
                    <NavLink className={({isActive}) => cn(style.link, {
                        [style.link_chose]: isActive
                    })} to="/admin/users"><img src="/user_white.svg"/>
                        <div>Пользователи</div>
                    </NavLink>
                    <NavLink className={({isActive}) => cn(style.link, {
                        [style.link_chose]: isActive
                    })} to="/admin/education"><img src="/education.svg"/>
                        <div>Обучение</div>
                    </NavLink>
                    <NavLink className={({isActive}) => cn(style.link, {
                        [style.link_chose]: isActive
                    })} to="/admin/publication"><img src="/publication.svg"/>
                        <div>Публикации</div>
                    </NavLink>
                    <NavLink className={({isActive}) => cn(style.link, {
                        [style.link_chose]: isActive
                    })} to="/admin/groups"><img src="/group_white.svg"/>
                        <div>Группы</div>
                    </NavLink>
                    <NavLink className={({isActive}) => cn(style.link, {
                        [style.link_chose]: isActive
                    })} to="/admin/vacancy"><img src="/vacancy.svg"/>
                        <div>Вакансии</div>
                    </NavLink>
                    <NavLink className={({isActive}) => cn(style.link, {
                        [style.link_chose]: isActive
                    })} to="/admin/statistic"><img src="/statistic.svg"/>
                        <div>Статистика</div>
                    </NavLink>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <InputSearch/>
                    <img src={user}/>
                </div>
                <div className={style.main_part}>
                    <div className={style.filters}>
                        <div className={style.buttons}>
                            <button className={style.button_filter}>
                                <img src="/filters.svg"/>
                                <div>Фильтр</div>
                            </button>
                            <button className={style.button_add}>
                                <img src="/plus.svg"/>
                                <div>Добавить пользователя</div>
                            </button>
                        </div>
                        <div className={style.inputSearch}>
                            <input onFocus={() => setInputFocus(true)}
                                   onBlur={() => setInputFocus(false)} className={style.input} placeholder="Поиск"/>
                            <div className={style.element}>
                                <button className={cn(style.search, {
                                    [style.focusButton]: inputFocus
                                })}><img src="/search1.svg"/></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.table}>
                        <table>
                            <tr>
                                <th><CheckBoxButton/></th>
                                <th>Имя</th>
                                <th>Роль</th>
                                <th>Статус</th>
                                <th>Активность</th>
                                <th>Дата регистрации</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {ADMIN_PAGE.map(el=> <tr>
                                <td><CheckBoxButton/></td>
                                <td className={style.name}><img src={`/images/${el.photo}.jpg`}/><div>{el.name}</div></td>
                                <td>{el.role}</td>
                                <td>{el.status}</td>
                                <td>{el.activity}</td>
                                <td>{el.date}</td>
                                <td><img src="/delete.svg"/></td>
                                <td><img src="/pencil_blue.svg"/></td>
                            </tr>)}
                        </table>
                        <div className={style.table_pages}>
                            <button className={style.button_inactive}><img src="/left.svg"/></button>
                            <div>Страница 1 из 21</div>
                            <button className={style.button_active}><img src="/right.svg"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}