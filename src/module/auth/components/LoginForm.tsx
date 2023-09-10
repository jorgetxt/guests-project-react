import { TextField, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "../constants/login.schema";
import { useLoginMutation } from "../redux-toolkit/authApisSlice";
import LoadingButton from "@mui/lab/LoadingButton";

function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: ({ password, username }) => {
      login({ password, username });
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
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
