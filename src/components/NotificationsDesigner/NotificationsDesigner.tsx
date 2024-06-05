import style from "./NotificationsDesigner.module.scss"

export function NotificationsDesigner() {
    return (
        <>
            <div className={style.background}></div>
            <div className={style.container}>
                <div className={style.element}>
                    <div className={style.icon}><img src="/like_thick.svg"/></div>
                    <div className={style.info}>
                        <div className={style.text}>5 человек <span>оценили ваш проект</span></div>
                        <div className={style.name}>Лендинг NeoCourse</div>
                    </div>
                </div>
                <div>
                    <div className={style.element}>
                        <div className={style.icon}><img src="/user_subscribed_thick.svg"/></div>
                        <div className={style.info}>
                            <div className={style.text}>2 новых <span>подписчик</span></div>
                            <div className={style.name}>@user123</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.element}>
                        <div className={style.icon}><img src="/message_thick.svg"/></div>
                        <div className={style.info}>
                            <div className={style.text}>4 новых <span>комментария к посту</span></div>
                            <div className={style.name}>Название поста</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}