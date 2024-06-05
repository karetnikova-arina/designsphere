import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type nameTypes = "name" | "surname" | "nikname" | "email" | "tel" | "password" | "repeatPassword"

export interface formState {
    notifications: boolean
    jwt: string
    user: {
        nikname: string
        name: string
        surname: string
        city: string
        gender: "man" | "woman" | ""
        birthday: Date | undefined
        phone: string
        email: string
        directions: string[]
        programs: string[]
        image: string
    }
    job: {
        workExperience: string
        grade: string
        workSchedule: string
        busyness: { "Полная": boolean, "Частичная": boolean, "Проектная": boolean }
        salaryExpectations: [string, string]
        resume: string
    }
}

const initialState: formState = {
    notifications: true,
    jwt: localStorage.getItem("jwt") ?? "",
    user: {
        nikname: "@arinaaa_kk",
        name: "Арина",
        surname: "Каретникова",
        city: "Москва",
        gender: "woman",
        birthday: new Date(2001, 11, 21),
        phone: "+7 (999) 999-99-99",
        email: "arina.k21@list.ru",
        directions: ["UX/UI-дизайн"],
        programs: ["Figma"],
        image: "/userArina.png"
    },
    job: {
        workExperience: "Менее 1 года",
        grade: "Junior",
        workSchedule: "Гибридный",
        busyness: {"Полная": true, "Частичная": false, "Проектная": false},
        salaryExpectations: ["8000", ""],
        resume: "",
    }
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addJwt: (state, action: PayloadAction<string>) => {
            state.jwt = action.payload
            localStorage.setItem("jwt", action.payload)
        },
        exit: (state) => {
            state.jwt = ""
            localStorage.removeItem("jwt")
        },
        updateDataUser: (state, action: PayloadAction<typeof state.user>) => {
            state.user = action.payload
        },
        updateDataJobValues: (state, action: PayloadAction<{ name: string, value: string }>) => {
            state.job = {...state.job, [action.payload.name]: action.payload.value}
        },
        updateDataJob: (state, action: PayloadAction<typeof state.job>) => {
            state.job = action.payload
        },
        readNotifications: (state)=>{
            state.notifications = false
        }

    }
})

export default userSlice.reducer
export const userActions = userSlice.actions