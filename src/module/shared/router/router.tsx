import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../../App";
import authRouter from "../../auth/routes/auth.route";
import guestsRouter from "../../guests/routes/guests.route";
import { Navigate } from "react-router-dom";

const privateRoutes: RouteObject[] = [...guestsRouter];

const publicRoutes: RouteObject[] = [...authRouter];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <Navigate to={"/login"} />,
  },
  ...privateRoutes,
  ...publicRoutes,
]);

export default router;
