import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../layout";
import Dashboard from "../pages/dashboard";
import PrivateRoute from "./privateRoute";

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
            }
        ]
    }
])

export default router;