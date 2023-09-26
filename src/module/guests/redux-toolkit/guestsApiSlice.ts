import { ResponseTab } from "./../../shared/schemas/responseTab.schema";
import { GuestResponse } from "./../schemas/guest.schema";
import { ApiBase } from "../../shared/hooks/baseApi";
import { Guest, GuestUpdate } from "../schemas/guest.schema";
import { setGuestsList } from "./guestsSlice";
export const guestsRequestsTags = ApiBase.enhanceEndpoints({
  addTagTypes: ["Guest"],
});

const extendedApi = guestsRequestsTags.injectEndpoints({
  endpoints: (build) => ({
    getGuests: build.query<ResponseTab<GuestResponse[]>, void>({
      query: () => "/guests",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setGuestsList(data.data));
        } catch (err) {
          console.log(err);
        }
      },
      providesTags: (result) =>
        result ? result.data.map(({ id }) => ({ type: "Guest", id })) : [],
    }),

    addGuest: build.mutation<Guest, Guest>({
      query: (value) => ({ url: "guests", method: "POST", body: value }),
      invalidatesTags: ["Guest"],
    }),

    updateGuest: build.mutation<Guest, GuestUpdate>({
      query: ({ id, ...value }) => ({
        url: `guests/${id}`,
        method: "PATCH",
        body: value,
      }),

      invalidatesTags: ["Guest"],
    }),

    //
  }),
  overrideExisting: false,
});

export const {
  useGetGuestsQuery,
  useAddGuestMutation,
  useUpdateGuestMutation,
} = extendedApi;
