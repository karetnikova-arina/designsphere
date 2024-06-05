import style from "./MainLayout.module.scss"
import {Header} from "../../components/parts/Header/Header.tsx";
import {Footer} from "../../components/parts/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";

export function MainLayout() {
    return (
        <div className={style.container}>
            <div>
                <Header/>
                <div className={style.content}>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}