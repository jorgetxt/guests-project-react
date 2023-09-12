// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../../store";

// initialize an empty api service that we'll inject endpoints into later as needed

export const tokenStorage = localStorage.getItem("x-token");
export const userNameStorage = localStorage.getItem("username");
export const rollStorage = localStorage.getItem("roll");

export const ApiBase = createApi({
  reducerPath: "globalApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      // headers.set("Content-Type", `application/json`);

      const token = (getState() as RootState).auth.auth.token || tokenStorage;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
