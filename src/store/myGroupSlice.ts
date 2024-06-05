import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type nameTypes = "name" | "surname" | "nikname" | "email" | "tel" | "password" | "repeatPassword"

export interface myGroupState {
    group:{
        image: string
        name: string,
        description: string
        directions: string[]
        programs: string[]
        visible: boolean | undefined
        creator?: string
    }

}

const initialState: myGroupState = {
    group: {
        image: "",
        name: "",
        description: "",
        directions: [],
        programs: [],
        visible: undefined,
        creator: "arinaaa_kk"
    }
}
const myGroupSlice = createSlice({
    name: 'myGroup',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<myGroupState>) => {
            const data = action.payload.group
            if(data.name==="")data.name=state.group.name
            if(data.description==="")data.description=state.group.description
            state.group = {...state.group, ...data}
        },
        deleteGroup: (state) => {
            state.group = initialState.group
        },
    }
})

export default myGroupSlice.reducer
export const myGroupActions = myGroupSlice.actions