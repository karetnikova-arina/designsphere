import './App.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Registration} from "./pages/Autotize/Registration/Registration.tsx";
import {Login} from "./pages/Autotize/Login/Login.tsx";
import {AuthLayout} from "./layouts/AuthLayout/AuthLayout.tsx";
import {RegistrationPassword} from "./pages/Autotize/RegistrationPassword/RegistrationPassword.tsx";
import {Recovery} from "./pages/Designer/Recovery/Recovery.tsx";
import {MainLayout} from "./layouts/MainLayout/MainLayout.tsx";
import {PublicationFeed} from "./pages/Designer/PublicationFeed/PublicationFeed.tsx";
import {Community} from "./pages/Designer/Community/Community.tsx";
import {Education} from "./pages/Designer/Education/Education.tsx";
import {Groups} from "./pages/Designer/Groups/Groups.tsx";
import {Friends} from "./pages/Designer/Friends/Friends.tsx";
import {Job} from "./pages/Designer/Job/Job.tsx";
import {CreateGroup} from "./pages/Designer/CreateGroup/CreateGroup.tsx";
import {Group} from "./pages/Designer/Group/Group.tsx";
import {MyGroup} from "./pages/Designer/MyGroup/MyGroup.tsx";
import {Vacancy} from "./pages/Designer/Vacancy/Vacancy.tsx";
import {Chat} from "./pages/Designer/Chat/Chat.tsx";
import {ChatLayout} from "./layouts/ChatLayout/ChatLayout.tsx";
import {Dialog} from "./components/Dialog/Dialog.tsx";
import {PersonalAccount} from "./pages/Designer/PersonalAccount/PersonalAccount.tsx";
import {EditAccount} from "./pages/Designer/EditAccount/EditAccount.tsx";
import {JobData} from "./pages/Designer/JobData/JobData.tsx";
import {WebinarCreate} from "./pages/Designer/WebinarCreate/WebinarCreate.tsx";
import {PublicationCreate} from "./pages/Designer/PublicationCreate/PublicationCreate.tsx";
import {Candidate} from "./pages/Employer/Candidate/Candidate.tsx";
import {VacancyCreate} from "./pages/Employer/VacancyCreate/VacancyCreate.tsx";
import {Users} from "./pages/Admin/Users/Users.tsx";
import {LoginAdmin} from "./pages/Autotize/LoginAdmin/LoginAdmin.tsx";
import {VacancyEmployer} from "./pages/Employer/Vacancy/Vacancy.tsx";
import {VacanciesEmployer} from "./pages/Employer/VacancyEmployer/VacancyEmployer.tsx";

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'registration',
                element: <Registration/>
            },
            {
                path: 'password',
                element: <RegistrationPassword title="Регистрация"/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'recovery',
                element: <Recovery/>
            },
            {
                path: 'newpassword',
                element: <RegistrationPassword title="Восстановление пароля"/>
            },
            {
                path: 'login/admin',
                element: <LoginAdmin/>
            },
        ]
    },
    {
        path: "/admin/users",
        element: <Users/>
    },
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <PublicationFeed/>
            },
            {
                path: "/communities",
                element: <Community/>,
                children: [
                    {
                        path: "friends",
                        element: <Friends/>
                    },
                    {
                        path: "online",
                        element: <Friends/>
                    },
                    {
                        path: "groups",
                        element: <Groups/>
                    }
                ]
            },
            {
                path: "/communities/account",
                element: <PersonalAccount/>
            },
            {
                path: "/communities/create",
                element: <CreateGroup type={true}/>,
            },
            {
                path: "/communities/group",
                element: <Group/>
            },
            {
                path: "/communities/mygroup",
                element: <MyGroup/>
            },
            {
                path: "/communities/mygroup/reduction",
                element: <CreateGroup type={false}/>
            },
            {
                path: "/education",
                element: <Education/>
            },
            {
                path: "/education/webinarcreate",
                element: <WebinarCreate/>
            },
            {
                path: "/education/publicationcreate",
                element: <PublicationCreate/>
            },
            {
                path: "/job",
                element: <><Outlet/></>,
                children: [
                    {
                        path: "",
                        element: <Job/>
                    },
                    {
                        path: "vacancy",
                        element: <Vacancy/>,
                    }
                ]
            },
            {
                path: "/personalaccount",
                element: <><Outlet/></>,
                children: [
                    {
                        path: "",
                        element: <PersonalAccount/>
                    },
                    {
                        path: "/personalaccount/edit",
                        element: <EditAccount/>
                    },
                    {
                        path: "/personalaccount/jobsearch",
                        element: <JobData/>
                    },
                ]
            },
            {
                path: '/vacancy',
                element: <VacanciesEmployer/>
            },
            {
                path: '/vacancy/create',
                element: <VacancyCreate/>
            },
            {
                path: '/candidate',
                element: <Candidate/>
            },
            {
                path: '/vacancyemployer',
                element: <VacancyEmployer/>
            }
        ]
    },
    {
        path: "/chat",
        element: <ChatLayout/>,
        children: [
            {
                path: "",
                element: <Chat/>,
                children: [
                    {
                        path: "",
                        element: <div className="mainWindow">Выберите чат, чтобы начать общение</div>
                    },
                    {
                        path: "personal/:id",
                        element: <Dialog type="personal"/>
                    },
                    {
                        path: "group/:id",
                        element: <Dialog type="group"/>
                    },
                    {
                        path: "job/:id",
                        element: <Dialog type="job"/>
                    },
                ]
            }
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
