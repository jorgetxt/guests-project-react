import { Grid } from "@mui/material";
import LoginForm from "../components/LoginForm";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

function Login() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid container sx={{ height: "100vh" }}>
      {matches && (
        <Grid
          item
          xs={6}
          sx={{ background: theme.palette.primary.dark }}
        ></Grid>
      )}
      <Grid
        item
        container
        md={6}
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default Login;
