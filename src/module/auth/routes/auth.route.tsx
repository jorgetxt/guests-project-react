import { RouteObject } from "react-router-dom";
import Login from "../screens/Login";

const authRouter: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

export default authRouter;
