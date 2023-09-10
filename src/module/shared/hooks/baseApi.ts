// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const ApiBase = createApi({
  reducerPath: "globalApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API_URL}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-token");
      headers.set("Content-Type", `application/json`);
      headers.set("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
