import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Booking from "../pages/Booking/Booking";
import BookingItems from "../pages/BookingItems/BookingItems";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "booking/:id",
        element: (
          <PrivateRoutes>
            <Booking></Booking>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/service/${params.id}`),
      },
      {
        path: "bookingItems",
        element: (
          <PrivateRoutes>
            <BookingItems></BookingItems>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
