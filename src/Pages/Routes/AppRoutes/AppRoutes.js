import { createBrowserRouter } from "react-router-dom";
import Inbox from "../../Inbox/Inbox";
import Main from "../../Layout/Main/Main";
import Login from "../../Login/Login";
import Users from "../../Users.js/Users";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
