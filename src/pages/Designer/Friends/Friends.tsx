import style from "./Friends.module.scss"
import {CommunityUserCard} from "../../../components/Cards/CommunityUserCard/CommunityUserCard.tsx";
import {SOOBSCHESTVO_FRIENDS} from "../../../data/2soobschestvo-friends.ts";
export function Friends() {
    return(
        <div className={style.content}>
            {SOOBSCHESTVO_FRIENDS.map(el=><CommunityUserCard {...el}/>)}
        </div>
    )
}