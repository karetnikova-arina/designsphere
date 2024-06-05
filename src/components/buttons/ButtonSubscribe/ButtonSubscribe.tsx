import style from "./ButtonSubscribe.module.scss";
import cn from "classnames";

interface ButtonSubscribeProps {
    subscribe: boolean;
    setSubscribe: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonSubscribe({ subscribe, setSubscribe }: ButtonSubscribeProps) {

    return (
        <button onClick={(e)=>setSubscribe(e)} className={cn(style.subscribe, {
            [style.setSubscribe]: !subscribe
        })}>
            {subscribe ? (
                <>
                    <img src="/user_subscribe.svg" alt="Subscribed" />
                    <div>Вы подписаны</div>
                </>
            ) : (
                <>
                    <img src="/subscribe.svg" alt="Subscribe" />
                    <div>Подписаться</div>
                </>
            )}
        </button>
    );
}