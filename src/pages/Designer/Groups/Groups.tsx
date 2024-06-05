import style from "./Groups.module.scss"
import {CardGroups} from "../../../components/Cards/CardGroups/CardGroups.tsx";

export function Groups() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <CardGroups/>
                <CardGroups/>
                <CardGroups/>
                <CardGroups/>
                <CardGroups/>
                <CardGroups/>
            </div>
            <div>
                <div className={style.title}>Рекомендуем</div>
                <div className={style.content}>
                    <CardGroups/>
                    <CardGroups/>
                    <CardGroups/>
                    <CardGroups/>
                    <CardGroups/>
                    <CardGroups/>
                </div>
            </div>
        </div>
    )
}