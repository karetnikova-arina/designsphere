import style from "./PublicationFeed.module.scss"
import {PublicationFeedFilters} from "../../../components/Filters/PublicationFeedFilters/PublicationFeedFilters.tsx";
import {CardMain} from "../../../components/Cards/CardMain/CardMain.tsx";
import {MAIN_PUBLICATION} from "../../../data/1main.ts";
import {ProjectInAccount} from "../../../components/ProjectInAccount/ProjectInAccount.tsx";
import {useState} from "react";

export function PublicationFeed( ) {
    const [windowCard, setWindowCard] = useState(false)
    return(
        <div className={style.container}>
            {windowCard && <ProjectInAccount close={() => setWindowCard(false)}/>}
            <PublicationFeedFilters/>
            <div className={style.content}>
                {MAIN_PUBLICATION.map(el=>  <CardMain onClick={()=>setWindowCard(true)} props={el}/>)}
            </div>
        </div>
    )
}