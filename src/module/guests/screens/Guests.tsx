import { useAppDispatch } from "../../shared/hooks/reduxHook";
import { setOpeonDialog } from "../redux-toolkit/guestsSlice";
import Button from "@mui/material/Button";
import Table from "../../shared/components/Table";
import { useGetGuestsQuery } from "../redux-toolkit/guestsApiSlice";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogUpdateGuest from "./DialogUpdateGuest";

function Guests() {
  const navigate = useNavigate();

  const { data, isLoading } = useGetGuestsQuery();

  const dispatch = useAppDispatch();

  const dataInRow: string[][] = Array.isArray(data)
    ? data?.map(({ id, date, note, status, firstname, lastname }) => [
        id?.toString() || "0",
        new Date(date).toLocaleString(),
        firstname + " " + lastname,
        note ? "si" : "no",
        status,
      ])
    : [];

  const headers = ["id", "Fecha", "Nombre", "Novedad", "Estado"];

  return (
    <Grid container spacing={2}>
      <DialogUpdateGuest />

      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("create")}
        >
          Agregar una novedad
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Table
          dataHeader={headers}
          dataRow={isLoading ? [headers.map(() => "cargando")] : dataInRow}
          option={(value) => (
            <Button
              variant="text"
              color="primary"
              size="small"
              onClick={() => dispatch(setOpeonDialog(Number(value)))}
            >
              editar
            </Button>
          )}
        />
      </Grid>
    </Grid>
  );
}

export default Guests;
