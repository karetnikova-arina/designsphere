import {configureStore} from "@reduxjs/toolkit";
import formSlice from "./formSlice.ts"
import userSlice from "./userSlice.tsx";
import myGroupSlice from "./myGroupSlice.ts";
import webinar from "./webinarSlice.ts";

export const store = configureStore({
    reducer:{
        form: formSlice,
        user: userSlice,
        myGroup: myGroupSlice,
        webinar: webinar
    }
})
store.subscribe(()=>{
    //saveState({jwt: store.getState().user.jwt}, JWT_PERSISTENT_STATE)
    //saveState(store.getState().cart, CART_PERSISTENT_STATE)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch