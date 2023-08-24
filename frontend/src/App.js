import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login";
import UserForm from "./component/UserForm";
import Assets from "./component/Assets";
import Home from "./component/Home";
import Admin from "./component/Admin";
import Protected from "./component/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/register",
    element: (
      <div className="login__wrapper">
        <UserForm></UserForm>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="login__wrapper">
        <Login></Login>
      </div>
    ),
  },
  {
    path: "/assets",
    element: <Assets></Assets>,
  },
  {
    path: "/admin",
    element: (
      <Protected>
        <div className="login__wrapper">
          <Admin></Admin>
        </div>
      </Protected>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
