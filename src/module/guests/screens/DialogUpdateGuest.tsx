import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHook";
import { setCloseDialog } from "../redux-toolkit/guestsSlice";
import UpdateGuestForm from "../components/UpdateGuestForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const dispatch = useAppDispatch();
  const {
    isOpenDialog: isOpen,
    guestId,
    guestsList,
  } = useAppSelector((store) => store.guests);

  const guest = React.useMemo(
    () => guestsList?.find(({ id }) => id === guestId),
    [guestsList, guestId]
  );

  const handleClose = () => {
    dispatch(setCloseDialog());
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Actualizar estado de invitado"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Invitado: {guest?.firstname + " " + guest?.lastname}
          </DialogContentText>
          {isOpen && <UpdateGuestForm />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Salir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
