import CreateGuestForm from "../components/CreateGuestForm";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const CreateGuest = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Button
          variant="text"
          color="primary"
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={() => navigate("/guests")}
        >
          Regresar
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CreateGuestForm />
      </Grid>
    </Grid>
  );
};

export default CreateGuest;
