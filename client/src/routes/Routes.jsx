import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Dashboard from "../Pages/Dashboard";


export const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index:true,
            element:<Register></Register>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/Dashboard',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);