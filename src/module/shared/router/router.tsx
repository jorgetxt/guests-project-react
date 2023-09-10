import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import authRouter from "../../auth/routes/auth.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...authRouter,
]);

export default router;
