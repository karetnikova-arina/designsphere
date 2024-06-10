import style from "./ButtonSubscribe.module.scss";
import cn from "classnames";

interface ButtonSubscribeProps {
    subscribe: boolean;
    setSubscribe: () => void;  // Changed to function with no parameters
}

export function ButtonSubscribe({ subscribe, setSubscribe }: ButtonSubscribeProps) {
    return (
        <button onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSubscribe();  // No parameter passed here
        }} className={cn(style.subscribe, {
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
