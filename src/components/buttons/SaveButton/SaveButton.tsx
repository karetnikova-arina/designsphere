import style from "./SaveButton.module.scss"

export function SaveButton({saved}: {saved: boolean}) {
    return(
        <button className={style.button}>
            <img src={saved ? "/saved.svg" :"/saveArt.svg"}/>
        </button>
    )
}