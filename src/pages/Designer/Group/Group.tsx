import style from "./Group.module.scss"
import {InputSearchFilters} from "../../../components/Filters/InputSearchFilters/InputSearchFilters.tsx";
import {CardProfile} from "../../../components/Cards/CardProfile/CardProfile.tsx";
import {GroupTitle} from "../../../components/GroupTitle/GroupTitle.tsx";

// interface GroupProps {
//     directions: string[],
//     programs: string[]
// }


export function Group() {
    return (
        <div className={style.container}>
            <GroupTitle myGroup={false}/>
            <InputSearchFilters/>
            <div className={style.content}>
                <CardProfile/>
                <CardProfile/>
                <CardProfile/>
                <CardProfile/>
                <CardProfile/>
                <CardProfile/>
                <CardProfile/>
            </div>
        </div>
    )
}