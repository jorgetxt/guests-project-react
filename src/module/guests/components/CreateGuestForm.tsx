import {
  TextField,
  Grid,
  Typography,
  Autocomplete,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useFormik } from "formik";
import { guestSchema } from "../constants/guest.schema.yup";
import { Guest } from "../schemas/guest.schema";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import status from "../constants/status";
import dayjs from "dayjs";
import { useGetDepartmentsQuery } from "../../departments/redux-toolkit/departmentsApiSlice";
import { useAddGuestMutation } from "../redux-toolkit/guestsApiSlice";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

function CreateGuestForm() {
  const [
    addGuest,
    {
      isLoading: isLoadingCreate,
      isError: isErrorCreate,
      error: errorCreate,
      isSuccess: isSuccessCreate,
    },
  ] = useAddGuestMutation();
  const {
    data,
    error,
    isLoading: isLoadingDepartment,
  } = useGetDepartmentsQuery();

  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const formik = useFormik<Guest>({
    initialValues: {
      cedula: "",
      date: null as unknown as Date,
      departamentId: 0,
      firstname: "",
      lastname: "",
      note: "",
      reason: "",
      registerDate: new Date(),
      status: "",
    },
    validationSchema: guestSchema,
    onSubmit: async (values) => {
      await addGuest(values);
      formik.resetForm();
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    },
  });

  return (
    <Grid container spacing={2}>
      {openAlert && isSuccessCreate && (
        <Grid item xs={6}>
          <Alert severity="success">
            <AlertTitle>Invitado creado con exito</AlertTitle>
            Este invitado se ha <strong>creado</strong>
          </Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          {isErrorCreate && JSON.stringify(errorCreate)}
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            {/* <Grid item xs={6}>
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
            </Grid> */}
            <Grid item xs={6}>
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
            {/* <Grid item xs={6}>
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
        </Grid> */}
            <Grid item xs={6}>
              <Autocomplete
                options={data || []}
                loading={isLoadingDepartment}
                loadingText="Cargando departamentos disponibles..."
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Departamentos"
                    error={Boolean(
                      formik.errors.departamentId &&
                        formik.touched.departamentId
                    )}
                    placeholder="Seleccione un departamento disponible"
                  />
                )}
                onChange={(_, value) =>
                  formik.setFieldValue("departamentId", value?.id || null)
                }
                fullWidth
                clearIcon={null}
              />

              {formik.touched.departamentId && formik.errors.departamentId && (
                <Typography variant="body2" color="red">
                  {error as string}
                  {formik.errors.departamentId}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={status}
                getOptionLabel={(option) => option}
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
                  formik.setFieldValue("status", value || null)
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
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de registro"
                  value={formik.values.date ? dayjs(formik.values.date) : null}
                  onChange={(newValue) => {
                    formik.setFieldValue("date", newValue);
                  }}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>

              {formik.touched.date && formik.errors.date && (
                <Typography variant="body2" color="red">
                  {`${formik.errors.date}`}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Fecha y hora de entrada"
                  sx={{ width: "100%" }}
                  value={
                    formik.values.registerDate
                      ? dayjs(formik.values.registerDate)
                      : null
                  }
                  onChange={(newValue) =>
                    formik.setFieldValue("registerDate", newValue)
                  }
                />
              </LocalizationProvider>

              {formik.touched.registerDate && formik.errors.registerDate && (
                <Typography variant="body2" color="red">
                  {`${formik.errors.registerDate}`}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} margin={2}>
              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={isLoadingCreate}
                fullWidth
              >
                Crear invitado
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default CreateGuestForm;
