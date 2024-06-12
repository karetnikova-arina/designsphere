import style from "./CardImage.module.scss";
import { SaveButton } from "../../buttons/SaveButton/SaveButton.tsx";
import { HTMLAttributes, useEffect, useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.ts";
import { NotificationWindow } from "../../windows/NotificationWindow/NotificationWindow.tsx";
import { MAIN_PUBLICATION_INTERFACE } from "../../../data/1main.ts";
import { SOOBSCHESTVO_GROUPS_INTERFACE } from "../../../data/3soobschestvo-groups.ts";
import { OBUCHENIE_WEBINAR_INTERFACE } from "../../../data/5obuchenie.ts";
import { SOOBSCHESTVO_GROUP_POST_INTERFACE } from "../../../data/4group-post.ts";
import { PORTFOLIO_INTERFACE } from "../../../data/17user_profile.ts";

type type = "main" | "webinar" | "group" | "profile";

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
    type: type;
    info: MAIN_PUBLICATION_INTERFACE | SOOBSCHESTVO_GROUPS_INTERFACE | OBUCHENIE_WEBINAR_INTERFACE | SOOBSCHESTVO_GROUP_POST_INTERFACE | PORTFOLIO_INTERFACE;
}

export function CardImage({ type, info, ...props }: CardImageProps) {
    const [save, setSave] = useState<boolean>(info.save);
    const [window, setWindow] = useState("");
    const { jwt } = useSelector((s: RootState) => s.user);

    useEffect(() => {
        if(!jwt.length) {
            setSave(false)
        }else {
            setSave(info.save)
        }
    }, [info.save])

    const click = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        if (!jwt.length) {
            setWindow("Чтобы сохранить проект, необходимо авторизоваться")
        } else {
            setSave(prev => !prev)
        }
    }

    const close = () => {
        setWindow("")
    };

    return (
        <div
            {...props}
            style={{ backgroundImage: `url(/images/${info.photo}.jpg)` }}
            className={cn(style.card, {
                [style.group]: type === "group"
            })}
        >
            {window.length > 0 && <NotificationWindow close={close} text={window} />}
            <div className={style.cardTop}>
                <div className={style.direction}>{info.direction}</div>
                {type === "main" && (
                    <div className={style.save} onClick={click}>
                        <SaveButton saved={save} />
                    </div>
                )}
                {type !== "main" && type !== "webinar" && "programm" in info && (
                    <div className={style.program}>{info.programm}</div>
                )}
            </div>
            <div className={style.name}>{info.title}</div>
        </div>
    );
}
