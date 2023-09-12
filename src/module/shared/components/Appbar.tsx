import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { setIsAuth, setAuth } from "../../auth/redux-toolkit/authSlice";
import { rollStorage, userNameStorage } from "../hooks/baseApi";
import { LoginResponse } from "../../auth/schemas/login.schema";
import LogoutIcon from "@mui/icons-material/Logout";

export default function ButtonAppBar() {
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(setIsAuth(false));
    dispatch(setAuth({} as LoginResponse));
    localStorage.removeItem("x-token");
    localStorage.removeItem("username");
    localStorage.removeItem("roll");
  };

  const auth = useAppSelector((store) => store.auth);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Typography variant="body1" color="lightgrey">
                  {auth.auth?.user?.username?.toUpperCase() ||
                    userNameStorage?.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="white">
                  {auth.auth?.user?.roll || rollStorage}
                </Typography>
              </Typography>
              <Button
                color="inherit"
                onClick={logOut}
                startIcon={<LogoutIcon />}
              >
                Cerrar sesión
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid item xs={12} padding={2}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
