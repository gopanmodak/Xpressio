import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Deals from "./Pages/Deals";
import NewArrivals from "./Pages/NewArrivals";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Vegetable from "./Pages/Vegetable";
import Privacy from "./Pages/Privacy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import VegetableDetails from "./Pages/VegetableDetails";
import NewArrivalsDetails from "./Pages/NewArrivalsDetails";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, 
        element: <Home /> },
      { path: "deals", 
        element: <Deals /> },
      { path: "Vegetable", 
        element: <Vegetable /> },
      { path: "newarrivals",
         element: <NewArrivals /> ,
         loader:async()=>fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=51')
        
        },

        {
          path:'newarrivals/:slug',
          element:<NewArrivalsDetails/>,
           loader:async()=>fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=51')
        },
      { path: "about", 
        element: <About /> },
      { path: "login", 
        element: <Login /> },
      { path: "signup",
         element: <SignUp /> },
      { path: "cart", 
        element: <Cart /> },
      { path: "privacy", 
        element: <Privacy /> },
      { path: "returnpolicy", 
        element: <ReturnPolicy /> },
      { path: "Vegetable/:slug", 
        element: <VegetableDetails /> },
    ],
  },
]);
