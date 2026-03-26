import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Deals from "./Pages/Deals";
import Packages from "./Pages/Packages";
import NewArrivals from "./Pages/NewArrivals";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";

export const routes=createBrowserRouter([

    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/deals',
                element:<Deals/>
            },
            {
                path:'/packages',
                element:<Packages/>
            },
            {
                path:'/newarrivals',
                element:<NewArrivals/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    }
])
        