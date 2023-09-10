import {
  TextField,
  Button,
  Grid,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import { guestUpdateSchema } from "../constants/guest.schema.yup";
import { Guest } from "../schemas/guest.schema";
import status from "../constants/status";

function UpdateGuestForm() {
  const formik = useFormik<Partial<Guest>>({
    initialValues: {
      note: "",
      status: "",
    },
    validationSchema: guestUpdateSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autocomplete
            options={status}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Estados"
                error={Boolean(formik.errors.status && formik.touched.status)}
                placeholder="Seleccione un estado disponible"
              />
            )}
            onChange={(_, value) => formik.setFieldValue("status", value || "")}
            fullWidth
            clearIcon={null}
          />

          {formik.touched.status && formik.errors.status && (
            <Typography variant="body2" color="red">
              {formik.errors.status}
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Actualizar invitado
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdateGuestForm;
