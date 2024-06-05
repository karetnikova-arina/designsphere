import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type nameTypes = "name" | "surname" | "nikname" | "email" | "tel" | "password" | "repeatPassword"

export interface webinarState {
    webinar:{
        image: string
        name: string,
        description: string
        directions: string[]
        topics: string[]
        date: string
        time: string
        save: boolean
    }

}

const initialState: webinarState = {
    webinar: {
        image: "",
        name: "",
        description: "",
        directions: [],
        topics: [],
        date: "",
        time: "",
        save: false
    }
}
const webinarSlice = createSlice({
    name: 'webinar',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<webinarState>) => {
            state.webinar = action.payload.webinar
        },
        deleteGroup: (state) => {
            state.webinar = initialState.webinar
        },
    }
})

export default webinarSlice.reducer
export const webinarActions = webinarSlice.actions