import {configureStore} from "@reduxjs/toolkit";
import formSlice from "./formSlice.ts"
import userSlice from "./userSlice.tsx";

export const store = configureStore({
    reducer:{
        form: formSlice,
        user: userSlice
    }
})
store.subscribe(()=>{
    //saveState({jwt: store.getState().user.jwt}, JWT_PERSISTENT_STATE)
    //saveState(store.getState().cart, CART_PERSISTENT_STATE)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch