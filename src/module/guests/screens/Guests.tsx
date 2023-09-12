import { useAppDispatch } from "../../shared/hooks/reduxHook";
import { setOpeonDialog } from "../redux-toolkit/guestsSlice";
import Button from "@mui/material/Button";
import Table from "../../shared/components/Table";
import { useGetGuestsQuery } from "../redux-toolkit/guestsApiSlice";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogUpdateGuest from "./DialogUpdateGuest";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useAuthGuards from "../../shared/constants/useAuthGuard";

function Guests() {
  const navigate = useNavigate();

  const { data, isLoading } = useGetGuestsQuery();

  const { havePermission } = useAuthGuards();

  const dispatch = useAppDispatch();

  const dataInRow: string[][] = Array.isArray(data)
    ? data?.map(
        ({
          id,
          registerDate,
          note,
          status,
          firstname,
          lastname,
          department,
          reason,
        }) => [
          id?.toString() || "0",
          new Date(registerDate).toLocaleString(),
          firstname + " " + lastname,
          department.name,
          note,
          reason,
          status,
        ]
      )
    : [];

  const headers = [
    "id",
    "Fecha",
    "Nombre",
    "Departamento",
    "Novedad",
    "Motivo",
    "Estado",
  ];

  return (
    <Grid container spacing={2}>
      <DialogUpdateGuest />

      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {havePermission && (
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => navigate("create")}
          >
            Agregar un visitante
          </Button>
        )}
      </Grid>
      <Grid item xs={12} sx={{ overflow: "auto" }}>
        <Table
          dataHeader={headers}
          dataRow={isLoading ? [headers.map(() => "cargando")] : dataInRow}
          option={(value) => (
            <Button
              variant="text"
              color="primary"
              size="small"
              disabled={!havePermission}
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
