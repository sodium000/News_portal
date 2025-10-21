import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import home from "../pages/home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/LoginPage/Login";
import Reagestration from "../pages/RegestrationPage/Reagestration";

const router = createBrowserRouter(
    [
    {    path : "/",
        element : <HomeLayout></HomeLayout>,
        children : [
            {
                path : "",
                Component : home
            },
            {
                path : "/category/:id",
                element : <CategoryNews></CategoryNews>,
                loader : ()=>fetch("/news.json")
            }
        ]
    },
    {    path : "/auth",
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path:"",
                Component : Login 
            },
            {
                path:'/auth/regestration',
                element : <Reagestration></Reagestration>
            },
        ]
    },
    {    path : "/news",
    },
    {    path : "/*",
        element : <h2>error</h2>
    },
    ]
)

export default router;