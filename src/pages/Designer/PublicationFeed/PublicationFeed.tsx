import style from "./PublicationFeed.module.scss"
import {PublicationFeedFilters} from "../../../components/Filters/PublicationFeedFilters/PublicationFeedFilters.tsx";
import {CardMain} from "../../../components/Cards/CardMain/CardMain.tsx";

export function PublicationFeed( ) {
    return(
        <div className={style.container}>
            <PublicationFeedFilters/>
            <div className={style.content}>
                <CardMain/>
                <CardMain/>
                <CardMain/>
                <CardMain/>
                <CardMain/>
                <CardMain/>
            </div>
        </div>
    )
}