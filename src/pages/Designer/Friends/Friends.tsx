import style from "./Friends.module.scss"
import {CommunityUserCard} from "../../../components/Cards/CommunityUserCard/CommunityUserCard.tsx";

export function Friends() {
    return(
        <div className={style.content}>
            <CommunityUserCard/>
            <CommunityUserCard/>
            <CommunityUserCard/>
            <CommunityUserCard/>
            <CommunityUserCard/>
        </div>
    )
}