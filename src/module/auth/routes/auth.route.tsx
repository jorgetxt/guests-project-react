import { RouteObject } from "react-router-dom";
import Login from "../components/Login";

const authRouter: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

export default authRouter;
