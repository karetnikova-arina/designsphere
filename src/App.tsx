import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Registration} from "./pages/Registration/Registration.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {AuthLayout} from "./pages/AuthLayout/AuthLayout.tsx";
import {RegistrationPassword} from "./pages/RegistrationPassword/RegistrationPassword.tsx";

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path: 'registration',
                element: <Registration/>
            },
            {
                path: 'password',
                element: <RegistrationPassword/>
            },
            {
                path: 'login',
                element: <Login/>
            },
        ]
    },
    {
        path: '*',
        element: <div>нет страницы</div>
    }

])
function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>

    )
}

export default App
