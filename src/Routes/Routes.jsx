import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Booking from "../pages/Booking/Booking";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"booking/:id",
          element:<Booking></Booking>,
          loader: ({params})=>fetch(`http://localhost:3000/service/${params.id}`)
        }
      ]
    },
  ]);
  export default router