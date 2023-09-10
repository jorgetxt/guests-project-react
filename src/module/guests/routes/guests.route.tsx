import { RouteObject } from "react-router-dom";
import Guests from "../screens/Guests";
import CreateGuest from "../screens/CreateGuest";

const guestsRouter: RouteObject[] = [
  {
    path: "/guests",
    element: <Guests />,
  },
  {
    path: "/guests/create",
    element: <CreateGuest />,
  },
];

export default guestsRouter;
