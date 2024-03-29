import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('https://server-75mdnazmul.vercel.app/chefAllData')
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Registration></Registration>
      },
      {
        path: "/chefAllData/:id",
        element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://server-75mdnazmul.vercel.app/chefAllData/${params.id}`)
      },
      {
        path : "errorpage",
        element: <Error></Error>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ],
  },
]);

export default router;