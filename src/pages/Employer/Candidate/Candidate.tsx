import style from "./Candidate.module.scss"
import {CommunityUserCard} from "../../../components/Cards/CommunityUserCard/CommunityUserCard.tsx";
import {InputSearchFilters} from "../../../components/Filters/InputSearchFilters/InputSearchFilters.tsx";

export function Candidate() {
    return (
        <div className={style.container}>
            <InputSearchFilters/>
            <div className={style.candidates}>
                <CommunityUserCard/>
                <CommunityUserCard/>
            </div>
        </div>
    )
}