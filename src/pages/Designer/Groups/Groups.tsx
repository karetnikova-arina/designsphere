import style from "./Groups.module.scss"
import {CardGroups} from "../../../components/Cards/CardGroups/CardGroups.tsx";
import {SOOBSCHESTVO_GROUPS, SOOBSCHESTVO_GROUPS_RECOMEND} from "../../../data/3soobschestvo-groups.ts";

export function Groups() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {SOOBSCHESTVO_GROUPS. map(el=><CardGroups {...el}/>)}
            </div>
            <div>
                <div className={style.title}>Рекомендуем</div>
                <div className={style.content}>
                    {SOOBSCHESTVO_GROUPS_RECOMEND.map(el=> <CardGroups {...el}/>)}
                </div>
            </div>
        </div>
    )
}