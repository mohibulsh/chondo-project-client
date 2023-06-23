import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Features from "../Pages/Features/Features";
import ChondoPadia from "../Pages/ChondoPadia/ChondoPadia";
import Shop from "../Pages/Shop/Shop";
import Blogs from "../Pages/Blogs/Blogs";
import Resources from "../Pages/Resources/Resources";
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
          path:'features',
          element:<Features/>
        },
        {
          path:'chondopadia',
          element:<ChondoPadia/>
        },
        {
          path:'shop',
          element:<Shop/>
        },
        {
          path:'Blogs',
          element:<Blogs/>
        },
        {
          path:'resources',
          element:<Resources/>
        },
        
    ]
  },
]);