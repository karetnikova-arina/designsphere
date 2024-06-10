import style from "./PublicationFeed.module.scss"
import {PublicationFeedFilters} from "../../../components/Filters/PublicationFeedFilters/PublicationFeedFilters.tsx";
import {CardMain} from "../../../components/Cards/CardMain/CardMain.tsx";
import {MAIN_PUBLICATION, MAIN_PUBLICATION_INTERFACE} from "../../../data/1main.ts";
import {ProjectInAccount} from "../../../components/ProjectInAccount/ProjectInAccount.tsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";

export function PublicationFeed() {
    const [windowCard, setWindowCard] = useState(false)
    const {values} = useSelector((s: RootState) => s.form)
    const [filter, setFilter] = useState("")
    const [data, setData] = useState<MAIN_PUBLICATION_INTERFACE[]>([])
    useEffect(() => {
        let newData = MAIN_PUBLICATION;
        if (filter === "save") {
            newData = MAIN_PUBLICATION.filter(el => el.save)
        } else if (filter === "subscribe") {
            newData = MAIN_PUBLICATION.filter(el => el.subscribe);
        }
        setData(newData);
    }, [filter]);

    const changeFilter = (value: string) => {
        if (filter === value) {
            setFilter("")
        } else {
            setFilter(value)
        }
    }

    return (
        <div className={style.container}>
            {windowCard && <ProjectInAccount close={() => setWindowCard(false)}/>}
            <PublicationFeedFilters filter={filter} changeFilter={changeFilter}/>
            <div className={style.content}>
                {data.map(el => <CardMain onClick={() => setWindowCard(true)} props={el}/>)}
            </div>
        </div>
    )
}