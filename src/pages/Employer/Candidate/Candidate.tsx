import style from "./Candidate.module.scss"
import {CommunityUserCard} from "../../../components/Cards/CommunityUserCard/CommunityUserCard.tsx";
import {InputSearchFilters} from "../../../components/Filters/InputSearchFilters/InputSearchFilters.tsx";
import {EMPLOYER_CANDIDATES} from "../../../data/20employer_candidates.ts";

export function Candidate() {
    return (
        <div className={style.container}>
            <InputSearchFilters/>
            <div className={style.candidates}>
                {EMPLOYER_CANDIDATES.map(el=> <CommunityUserCard {...el}/>)}
            </div>
        </div>
    )
}