import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./module/shared/router/Router";
import "./App.css";
import {
  useAppDispatch,
  useAppSelector,
  // useAppSelector,
} from "./module/shared/hooks/reduxHook";
import { setIsAuth } from "./module/auth/redux-toolkit/authSlice";

function App() {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((store) => store.auth.isAuth);

  const isAuthToken = localStorage.getItem("x-token");

  useEffect(() => {
    console.log("entra");
    if (isAuthToken && !isAuth) {
      dispatch(setIsAuth(true));
    }
  });

  const privateR = createBrowserRouter([
    {
      path: "/*",
      element: <Navigate to="/guests" />,
    },
    ...privateRoutes,
  ]);

  const publicR = createBrowserRouter([
    {
      path: "/*",
      element: <Navigate to="/login" />,
    },
    ...publicRoutes,
  ]);

  return <RouterProvider router={isAuth || isAuthToken ? privateR : publicR} />;
}

export default App;
