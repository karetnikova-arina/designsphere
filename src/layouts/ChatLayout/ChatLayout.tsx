import style from "./ChatLayout.module.scss"
import {Header} from "../../components/parts/Header/Header.tsx";
import {Outlet} from "react-router-dom";

export function ChatLayout() {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.content}>
                <Outlet/>
            </div>
        </div>
    )
}