import { TextField, Grid, Typography, Alert, AlertTitle } from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "../constants/login.schema";
import { useLoginMutation } from "../redux-toolkit/authApisSlice";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

function LoginForm() {
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      username: "Juan1",
      password: "12345",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ password, username }) => {
      await login({ password, username });
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {openAlert && isError && (
          <Grid item xs={12} sx={{ width: 1 }}>
            <Alert severity="warning">
              <AlertTitle>Ha ocurrido un error</AlertTitle>
              {/* Las credenciales son <strong>incorrectas</strong> */}
              {JSON.stringify(error)}
            </Alert>
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="username"
            label="Usuario"
            onChange={formik.handleChange}
            value={formik.values.username}
          />

          {formik.touched.username && formik.errors.username && (
            <Typography variant="body2" color="red">
              {formik.errors.username}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password"
            label="Contraseña"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <Typography variant="body2" color="red">
              {formik.errors.password}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={isLoading}
            fullWidth
          >
            Iniciar sesión
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
