import { RouteObject } from "react-router-dom";

import authRouter from "../../auth/routes/auth.route";
import guestsRouter from "../../guests/routes/guests.route";
import Appbar from "../../shared/components/Appbar";
// import Appbar from "../../shared/components/AppTest";

export const privateRoutes: RouteObject[] = [
  { element: <Appbar />, children: [...guestsRouter] },

  //   ...guestsRouter,
];

export const publicRoutes: RouteObject[] = [...authRouter];
