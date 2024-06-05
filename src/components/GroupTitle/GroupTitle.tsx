import style from "./GroupTitle.module.scss"
import cn from "classnames";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {NavLink} from "react-router-dom";

interface GroupTitleProps {
    myGroup: boolean
}
export function GroupTitle(props: GroupTitleProps) {
    const {group} = useSelector((s: RootState) => s.myGroup)
    return(
        <div className={style.titleInfo}>
            <div className={style.leftInfo}>
                {group.image ? <img src={group.image} className={style.image}/> : <div className={style.image}></div>}
                {!props.myGroup ? <button className={style.button}>
                    <img src="/subscribe.svg"/>
                    <div>Подписаться</div>
                </button>: <NavLink to="/communities/mygroup/reduction" className={cn(style.button, style.buttonMy)}>
                    <img src="/pencilBlue.svg"/>
                    <div>Редактировать</div>
                </NavLink>}
            </div>
            <div className={style.info}>
                <div className={style.title}>{group.name}</div>
                <div className={style.description}>{group.description}</div>
                <div className={style.types}>
                    <div className={style.name}>Direction</div>
                    {group.directions.map((el) => <div className={style.type}>{el}</div>)}
                </div>
                <div className={style.types}>
                    <div className={style.name}>Program</div>
                    {group.programs.map((el) => <div className={style.type}>{el}</div>)}
                </div>
                <div className={style.types}>
                    <div className={style.creater}>Creater</div>
                    <div className={style.nikname}>
                        <img className={style.userImg}/>
                        <div>{group.creator}</div>
                    </div>
                </div>
                <button className={cn(style.button, {
                    [style.buttonMy]: props.myGroup
                })}>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 20.1667C14.5 20.719 14.9477 21.1667 15.5 21.1667C16.0523 21.1667 16.5 20.719 16.5 20.1667H14.5ZM0.5 20.1667C0.5 20.719 0.947715 21.1667 1.5 21.1667C2.05228 21.1667 2.5 20.719 2.5 20.1667H0.5ZM18.3399 3.32675C17.9494 2.93622 17.3162 2.93622 16.9257 3.32675C16.5352 3.71727 16.5352 4.35044 16.9257 4.74096L18.3399 3.32675ZM16.9257 9.92612C16.5352 10.3166 16.5352 10.9498 16.9257 11.3403C17.3162 11.7309 17.9494 11.7309 18.3399 11.3403L16.9257 9.92612ZM20.8738 0.792892C20.4832 0.402369 19.8501 0.402369 19.4596 0.792894C19.069 1.18342 19.069 1.81658 19.4596 2.20711L20.8738 0.792892ZM19.4596 12.4597C19.069 12.8503 19.069 13.4834 19.4596 13.8739C19.8501 14.2645 20.4832 14.2645 20.8738 13.8739L19.4596 12.4597ZM16.5 20.1667C16.5 18.4396 15.45 16.9985 14.0044 16.0348C12.5519 15.0664 10.6029 14.5 8.5 14.5V16.5C10.2631 16.5 11.8141 16.9782 12.895 17.6989C13.983 18.4242 14.5 19.3164 14.5 20.1667H16.5ZM8.5 14.5C6.39711 14.5 4.44808 15.0664 2.99555 16.0348C1.55002 16.9985 0.5 18.4396 0.5 20.1667H2.5C2.5 19.3164 3.01699 18.4242 4.10495 17.6989C5.18593 16.9782 6.73689 16.5 8.5 16.5V14.5ZM8.5 11C6.47496 11 4.83333 9.35838 4.83333 7.33333H2.83333C2.83333 10.4629 5.37039 13 8.5 13V11ZM4.83333 7.33333C4.83333 5.30829 6.47496 3.66667 8.5 3.66667V1.66667C5.37039 1.66667 2.83333 4.20372 2.83333 7.33333H4.83333ZM8.5 3.66667C10.525 3.66667 12.1667 5.30829 12.1667 7.33333H14.1667C14.1667 4.20372 11.6296 1.66667 8.5 1.66667V3.66667ZM12.1667 7.33333C12.1667 9.35838 10.525 11 8.5 11V13C11.6296 13 14.1667 10.4629 14.1667 7.33333H12.1667ZM16.9257 4.74096C17.2662 5.08144 17.5363 5.48565 17.7205 5.93051L19.5683 5.16515C19.2835 4.47763 18.8661 3.85295 18.3399 3.32675L16.9257 4.74096ZM17.7205 5.93051C17.9049 6.37553 17.9999 6.85271 17.9999 7.33406H19.9999C19.9999 6.58973 19.853 5.8525 19.5683 5.16515L17.7205 5.93051ZM17.9999 7.33406C17.9999 7.81517 17.9051 8.29074 17.7207 8.73597L19.5684 9.50134C19.853 8.81419 19.9999 8.07861 19.9999 7.33406H17.9999ZM17.7207 8.73597C17.5363 9.18108 17.266 9.58583 16.9257 9.92612L18.3399 11.3403C18.8663 10.8139 19.2837 10.1886 19.5684 9.50134L17.7207 8.73597ZM19.4596 2.20711C20.1327 2.88029 20.6667 3.67948 21.0311 4.55904L22.8788 3.79367C22.414 2.67146 21.7327 1.6518 20.8738 0.792892L19.4596 2.20711ZM21.0311 4.55904C21.3956 5.43914 21.5838 6.38171 21.5838 7.33316H23.5838C23.5838 6.11791 23.3434 4.91534 22.8788 3.79367L21.0311 4.55904ZM21.5838 7.33316C21.5838 8.28494 21.3959 9.22792 21.0315 10.1077L22.8793 10.8731C23.344 9.7511 23.5838 8.54808 23.5838 7.33316H21.5838ZM21.0315 10.1077C20.6673 10.9871 20.1329 11.7864 19.4596 12.4597L20.8738 13.8739C21.7325 13.0152 22.4144 11.9955 22.8793 10.8731L21.0315 10.1077Z" />
                    </svg>
                    <div>Пригласить друзей</div>
                </button>
            </div>
        </div>
    )
}