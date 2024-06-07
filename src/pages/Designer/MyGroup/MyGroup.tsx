import style from "./MyGroup.module.scss"
import {GroupTitle} from "../../../components/GroupTitle/GroupTitle.tsx";
import {useEffect} from "react";

export function MyGroup() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className={style.container}>
            <GroupTitle myGroup={true}/>
            <button className={style.button}>
                <img src="/plus.svg"/>
                <div>Создать пост</div>
            </button>
        </div>
    )
}