import style from "./AuthLayout.module.scss"
import {Outlet} from "react-router-dom";


export function AuthLayout(){
    return(
        <div className={style.layout}>
            <div className={style.logo}>
                {/*<img className={style.background} src='/фон.png' alt='Фон'/>*/}
            </div>
            <div className={style.content}>
                <Outlet/>
            </div>
        </div>
    )
}