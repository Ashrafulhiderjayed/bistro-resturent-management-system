import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: 'menu', 
          element: <Menu />
        },
        {
          path: 'order/:category', 
          element: <Order />
        },
        {
          path: 'login', 
          element: <Login />
        },
        {
          path: 'signup',  
          element: <Signup />
        },
        {
          path: 'secret',  
          element: <PrivateRoute> <Secret /> </PrivateRoute>
        },
      ]
    },
    // Dashboard routes
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        // User Routes
        {
          path: "userHome",
          element: <UserHome />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory />,
        },
        // Admin Only Routes
        {
          path: "adminHome",
          element: <AdminRoute><AdminHome /></AdminRoute>,
        },
        {
          path: "addItems",
          element: <AdminRoute><AddItems /></AdminRoute>,
        },
        {
          path: "updateItem/:id",
          element: <AdminRoute><UpdateItem /></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-server-vert.vercel.app/menu/${params.id}`)
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems /></AdminRoute>,
        },
        {
          path: "users",
          element: <AdminRoute><AllUsers /></AdminRoute>,
        }
      ],
    }
  ]);