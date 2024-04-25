import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type nameTypes = "name" | "surname" | "nikname" | "email" | "tel" | "password" | "repeatPassword"

export interface formState {
    jwt: string
}

const initialState: formState = {
    jwt: localStorage.getItem("jwt") ?? ""
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addJwt: (state, action: PayloadAction<string>) => {
            state.jwt = action.payload
            localStorage.setItem("jwt", action.payload)
        },
    }
})

export default userSlice.reducer
export const userActions = userSlice.actions