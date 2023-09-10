import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import authRouter from "../../auth/routes/auth.route";
import guestsRouter from "../../guests/routes/guests.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...authRouter,
  ...guestsRouter,
]);

export default router;
