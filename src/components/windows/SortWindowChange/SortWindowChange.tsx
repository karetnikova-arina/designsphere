import style from "./SortWindowChange.module.scss"
import {ReactNode} from "react";
import cn from "classnames";

export function SortWindowChange({right, left, children}: {
    right: boolean,
    left: boolean,
    children: ReactNode
}) {
    return (
        <div className={cn(style.container, {
            [style.right]: right,
            [style.left]: left,
            [style.all]: left && right,
        })}>
            {children}
        </div>
    )
}