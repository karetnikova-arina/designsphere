import style from "./Community.module.scss"
import {CommunityFilters} from "../../../components/Filters/CommunityFilters/CommunityFilters.tsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {InputSearchFilters} from "../../../components/Filters/InputSearchFilters/InputSearchFilters.tsx";
import {useEffect} from "react";

export function Community() {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(location.pathname)
        if(location.pathname==="/communities") {
            console.log(location.pathname)
            navigate("/communities/friends")
        }
    },[location])
    return (
        <div className={style.container}>
            <CommunityFilters/>
            <InputSearchFilters/>
            <Outlet/>
        </div>
    )
}