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
import FAQ from "./Components/FAQ";
import FavoriteProducts from "./Pages/DealsPages/FavoriteProducts";
import BestDealOnline from "./Pages/DealsPages/BestDealOnline";
import DailyNeed from "./Pages/DealsPages/DailyNeed";
import FreshProducts from "./Pages/DealsPages/FreshProducts";
import HouseHoldItem from "./Pages/DealsPages/HouseHoldItem";
import LimitedTime from "./Pages/DealsPages/LimitedTime";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "deals", element: <Deals /> },
      { path: "Vegetable", element: <Vegetable /> },
      { path: "newarrivals", element: <NewArrivals /> },

      {
        path: "newarrivals/:slug",
        element: <NewArrivalsDetails />,},
      { path: "faq", element: <FAQ /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
      { path: "privacy", element: <Privacy /> },
      { path: "returnpolicy", element: <ReturnPolicy /> },
      { path: "Vegetable/:slug", element: <VegetableDetails /> },
      {path: "deals/favorite-products", element: <FavoriteProducts />},
      {path: "deals/best-deals", element: <BestDealOnline />},
      {path: "deals/daily-need", element: <DailyNeed />},
      {path: "deals/fresh-products", element: <FreshProducts />},
      {path: "deals/house-hold-item", element: <HouseHoldItem />},
      {path: "deals/limited-time", element: <LimitedTime />},
    ],
  },
]);
