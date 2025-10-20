import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import home from "../pages/home";
import CategoryNews from "../pages/CategoryNews";

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
        element : <h2>authentication layout</h2>
    },
    {    path : "/news",
        element : <h2>news Layout</h2>
    },
    {    path : "/*",
        element : <h2>error</h2>
    },
    ]
)

export default router;