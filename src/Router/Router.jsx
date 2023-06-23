import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Features from "../Pages/Features/Features";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          Path:'features',
          element:<Features/>
        },
        {
          path:'shop',
          element:<Shop/>
        }
    ]
  },
]);