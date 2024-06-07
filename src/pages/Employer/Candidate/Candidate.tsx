import style from "./Candidate.module.scss"
import {CommunityUserCard} from "../../../components/Cards/CommunityUserCard/CommunityUserCard.tsx";
import {InputSearchFilters} from "../../../components/Filters/InputSearchFilters/InputSearchFilters.tsx";
import {SOOBSCHESTVO_FRIENDS} from "../../../data/2soobschestvo-friends.ts";

export function Candidate() {
    return (
        <div className={style.container}>
            <InputSearchFilters/>
            <div className={style.candidates}>
                {SOOBSCHESTVO_FRIENDS.map(el=> <CommunityUserCard {...el}/>)}
            </div>
        </div>
    )
}