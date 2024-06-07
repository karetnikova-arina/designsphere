import style from "./Comments.module.scss"
import {Comment} from "../Comment/Comment.tsx";
import {PROSMOTR_VIDEO_COMMENTS} from "../../data/10prosmotr.ts";

export function Comments({comments}: {comments: typeof PROSMOTR_VIDEO_COMMENTS}) {
    return(
        <div className={style.comments}>
            <div className={style.titleComments}>Комментарии <span>{comments.length}</span></div>
            {comments.map(el=><Comment text={el.comment} date={el.time} name={el.nickname} like={{liked: false, count: Number(el.like)}}/>)}
        </div>
    )
}