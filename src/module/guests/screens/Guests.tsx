import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHook";
import { increment } from "../redux-toolkit/guestsSlice";
import Button from "@mui/material/Button";
import Table from "../../shared/components/Table";
import { useGetGuestsQuery } from "../redux-toolkit/guestsApiSlice";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Guests() {
  const navigate = useNavigate();

  const { data = [], isLoading } = useGetGuestsQuery();

  const count = useAppSelector((state) => state.guests.value);
  const dispatch = useAppDispatch();

  const dataInRow = data?.map(({ date, note, status, firstname, lastname }) => [
    new Date(date).toLocaleString(),
    firstname + " " + lastname,
    note ? "si" : "no",
    status,
  ]);

  const headers = ["Fecha", "Nombre", "Novedad", "Estado"];

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          Producto suma {count}
        </Button>
      </Grid>
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
          option={
            <Button variant="text" color="primary" size="small">
              ver más
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
}

export default Guests;
