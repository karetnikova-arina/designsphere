import style from "../NotificationsDesigner/NotificationsDesigner.module.scss"

export function NotificationsEmployer() {
    return (
        <>
            <div className={style.background}></div>
            <div className={style.container}>
                <div className={style.element}>
                    <div className={style.icon}><img src="/like_thick.svg"/></div>
                    <div className={style.info}>
                        <div className={style.text}>5 человек <span>откликнулись</span></div>
                        <div className={style.name}>Вакансия “UX/UI дизайнер”</div>
                    </div>
                </div>
                <div>
                    <div className={style.element}>
                        <div className={style.icon}><img src="/eye.svg"/></div>
                        <div className={style.info}>
                            <div className={style.text}>21 человек <span>посмотрели</span></div>
                            <div className={style.name}>Вакансия “UX/UI дизайнер”</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.element}>
                        <div className={style.icon}><img src="/save_thik.svg"/></div>
                        <div className={style.info}>
                            <div className={style.text}>10 человек <span>сохранили</span></div>
                            <div className={style.name}>Вакансия “Motion-дизайнер”</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}