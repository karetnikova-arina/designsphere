import style from "./Group.module.scss"
import {InputSearchFilters} from "../../../components/Filters/InputSearchFilters/InputSearchFilters.tsx";
import {CardProfile} from "../../../components/Cards/CardProfile/CardProfile.tsx";
import {GroupTitle} from "../../../components/GroupTitle/GroupTitle.tsx";
import {SOOBSCHESTVO_GROUP1_POSTS} from "../../../data/11soobschestvo_group1.ts";


export function Group() {
    return (
        <div className={style.container}>
            <GroupTitle myGroup={false}/>
            <InputSearchFilters/>
            <div className={style.content}>
                {SOOBSCHESTVO_GROUP1_POSTS.map(el=> <CardProfile {...el}/>)}
            </div>
        </div>
    )
}