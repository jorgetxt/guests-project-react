import { ApiBase } from "../../shared/hooks/baseApi";
import { Guest } from "../schemas/guest.schema";
export const guestsRequestsTags = ApiBase.enhanceEndpoints({
  addTagTypes: ["Guest"],
});

const extendedApi = guestsRequestsTags.injectEndpoints({
  endpoints: (build) => ({
    getGuests: build.query<Guest[], void>({
      query: () => "/guests",
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Guest", id })) : [],
    }),

    addGuest: build.mutation<Guest, Guest>({
      query: (value) => ({ url: "guests", method: "POST", body: value }),
      invalidatesTags: ["Guest"],
    }),

    //
  }),
  overrideExisting: false,
});

export const { useGetGuestsQuery, useAddGuestMutation } = extendedApi;
