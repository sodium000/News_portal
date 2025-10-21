import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import home from "../pages/home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/LoginPage/Login";
import Reagestration from "../pages/RegestrationPage/Reagestration";
import NewsPage from "../pages/News/NewsPage";
import PrivateLayout from "../layouts/PrivateLayout";
import Loader from "../component/Loader";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    Component: home
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                    hydrateFallbackElement:<Loader></Loader>
            
                }
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    Component: Login
                },
                {
                    path: '/auth/regestration',
                    element: <Reagestration></Reagestration>
                },
            ]
        },
        {
            path: "/news-detailes/:id",
            element: <PrivateLayout><NewsPage></NewsPage></PrivateLayout>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loader></Loader>
        },

        {
            path: "/*",
            element: <h2>error</h2>
        },
    ]
)

export default router;