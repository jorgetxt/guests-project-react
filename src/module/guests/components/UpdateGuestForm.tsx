import {
  TextField,
  Grid,
  Typography,
  Autocomplete,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useFormik } from "formik";
import { guestUpdateSchema } from "../constants/guest.schema.yup";
import { GuestUpdate } from "../schemas/guest.schema";
import status from "../constants/status";
import { useUpdateGuestMutation } from "../redux-toolkit/guestsApiSlice";
import { useState, useMemo } from "react";
import { LoadingButton } from "@mui/lab";
import { useAppSelector } from "../../shared/hooks/reduxHook";

function UpdateGuestForm() {
  const [updateGuest, { isLoading, isSuccess }] = useUpdateGuestMutation();
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const { guestId, guestsList } = useAppSelector((store) => store.guests);

  const guest = useMemo(
    () => guestsList?.find(({ id }) => id === guestId),
    [guestsList, guestId]
  );

  const formik = useFormik<GuestUpdate>({
    initialValues: {
      id: guest?.id || 0,
      note: guest?.note || "",
      status: guest?.status || "",
    },
    validationSchema: guestUpdateSchema,
    onSubmit: async (values) => {
      await updateGuest(values);
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
        // formik.resetForm();
      }, 5000);
    },
  });

  return (
    <Grid container spacing={2} marginY={2}>
      {openAlert && isSuccess && (
        <Grid item xs={12}>
          <Alert severity="success">
            <AlertTitle>Visitante actualizado con exito</AlertTitle>
            Este visitante se ha <strong>actualizado</strong>
          </Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                options={status}
                getOptionLabel={(option) => option}
                value={
                  status?.find((value) => value === formik.values.status) ||
                  null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Estados"
                    error={Boolean(
                      formik.errors.status && formik.touched.status
                    )}
                    placeholder="Seleccione un estado disponible"
                  />
                )}
                onChange={(_, value) =>
                  formik.setFieldValue("status", value || "")
                }
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
              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={isLoading}
                fullWidth
              >
                Actualizar visitante
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default UpdateGuestForm;
