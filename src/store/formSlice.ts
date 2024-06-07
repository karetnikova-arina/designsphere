import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type nameTypes = "name" | "surname" | "nikname" | "email" | "tel" | "password" | "repeatPassword"

export interface formState {
    isValid: {
        name: boolean,
        surname: boolean,
        nikname: boolean,
        email: boolean,
        tel: boolean,
        password: boolean,
        repeatPassword: boolean
    },
    values: {
        name: string,
        surname: string,
        nikname: string,
        email: string,
        tel: string,
        password: string,
        repeatPassword: string,
        person: string
    }
}

const initialState: formState = {
    isValid: {
        name: true,
        surname: true,
        nikname: true,
        email: true,
        tel: true,
        password: true,
        repeatPassword: true,
    },
    values: {
        name: "",
        surname: "",
        nikname: "",
        email: "",
        tel: "",
        password: "",
        repeatPassword: "",
        //person: "Работодатель"
        person: ""
    }
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addValue: (state, action: PayloadAction<{ name: nameTypes, value: string }>) => {
            const name = action.payload.name
            if(name==="tel"){
                state.values[name] = action.payload.value.replace(/\D/g,'')
            }else {
                state.values[name] = action.payload.value
            }
        },
        addPerson: (state, action: PayloadAction<string>) => {
            state.values.person = action.payload

        },
        checkValid: (state, action: PayloadAction<nameTypes | number >) => {
            const email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            const nik = /^@[\w-]{1,15}$/
            const tel = /^[0-9]{11}$/;
            if(action.payload===1){
                if(!state.values.name.length) state.isValid.name=false
                if(!state.values.surname.length) state.isValid.surname=false
                if(!state.values.nikname.length) state.isValid.nikname=false
                if(!state.values.email.length) state.isValid.email=false
                if(!state.values.tel.length) state.isValid.tel=false
            } else if(action.payload===2){
                 if(!state.values.password.length) state.isValid.password=false
                 if(!state.values.repeatPassword.length || state.values.password!==state.values.repeatPassword) state.isValid.repeatPassword=false
                console.log(state.values.password)
                console.log(state.values.repeatPassword)
            }else{
                switch (action.payload) {
                    case "name":
                        state.isValid.name = Boolean(state.values.name)
                        break
                    case "surname":
                        state.isValid.surname = Boolean(state.values.surname)
                        break
                    case "nikname":
                        state.isValid.nikname = nik.test(String(state.values.nikname))
                        break
                    case "email":
                        state.isValid.email = email.test(String(state.values.email))
                        break
                    case "tel":
                        state.isValid.tel = tel.test(String(state.values.tel))
                        break
                    case "password":
                        state.isValid.password = !(state.values.password.length < 8 || !(/[A-Z]/.test(state.values.password)) || !(/[a-z]/.test(state.values.password)))
                        break
                    case "repeatPassword":
                        state.isValid.repeatPassword = state.values.password===state.values.repeatPassword
                        break
                }
            }

        }
    }
})

export default formSlice.reducer
export const formActions = formSlice.actions