import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../layout";
import Dashboard from "../pages/dashboard";
import PrivateRoute from "./privateRoute";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path: "/dashboard/:id",
                element: <PrivateRoute><Details/></PrivateRoute>
            }
        ]
    }
])

export default router;