import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GuestResponse } from "../schemas/guest.schema";

export interface guestsState {
  isOpenDialog: boolean;
  guestId: number;
  guestsList: GuestResponse[];
}

const initialState: guestsState = {
  guestId: 0,
  isOpenDialog: false,
  guestsList: [] as GuestResponse[],
};

export const guestsSlice = createSlice({
  name: "guests",
  initialState,
  reducers: {
    setOpeonDialog: (state, action: PayloadAction<number>) => {
      state.isOpenDialog = true;
      state.guestId = action.payload;
    },
    setCloseDialog: (state) => {
      state.isOpenDialog = false;
      state.guestId = 0;
    },
    setGuestsList: (state, action: PayloadAction<GuestResponse[]>) => {
      state.guestsList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpeonDialog, setCloseDialog, setGuestsList } =
  guestsSlice.actions;

export default guestsSlice.reducer;
