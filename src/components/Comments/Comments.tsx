import style from "./Comments.module.scss"
import {Comment} from "../Comment/Comment.tsx";

export function Comments() {
    return(
        <div className={style.comments}>
            <div className={style.titleComments}>Комментарии <span>2</span></div>
            <Comment text="Круто!" date="16:25" name="User1111" like={{liked: false, count: 0}}/>
            <Comment text="Нереально!" date="15:40" name="Kriper2011" like={{liked: true, count: 2}}/>
        </div>
    )
}