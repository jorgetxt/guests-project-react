import { TextField, Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { guestSchema } from "../constants/guest.schema.yup";
import { Guest } from "../schemas/guest.schema";

function CreateForm() {
  const formik = useFormik<Guest>({
    initialValues: {
      cedula: "",
      date: new Date(),
      departamentId: 0,
      firstname: "",
      hour: "",
      lastname: "",
      note: "",
      reason: "",
      registerDate: new Date(),
      status: "",
    },
    validationSchema: guestSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="firstname"
            label="Nombre"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />

          {formik.touched.firstname && formik.errors.firstname && (
            <Typography variant="body2" color="red">
              {formik.errors.firstname}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="lastname"
            label="Apellido"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />

          {formik.touched.lastname && formik.errors.lastname && (
            <Typography variant="body2" color="red">
              {formik.errors.lastname}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="cedula"
            label="Cedula"
            onChange={formik.handleChange}
            value={formik.values.cedula}
          />

          {formik.touched.cedula && formik.errors.cedula && (
            <Typography variant="body2" color="red">
              {formik.errors.cedula}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="note"
            label="Novedad"
            onChange={formik.handleChange}
            value={formik.values.note}
          />

          {formik.touched.note && formik.errors.note && (
            <Typography variant="body2" color="red">
              {formik.errors.note}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Motivo de visita"
            onChange={formik.handleChange}
            value={formik.values.reason}
            id="reason"
          />

          {formik.touched.reason && formik.errors.reason && (
            <Typography variant="body2" color="red">
              {formik.errors.reason}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Hora"
            onChange={formik.handleChange}
            value={formik.values.hour}
            id="hour"
          />

          {formik.touched.hour && formik.errors.hour && (
            <Typography variant="body2" color="red">
              {formik.errors.hour}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Crear invitado
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CreateForm;
