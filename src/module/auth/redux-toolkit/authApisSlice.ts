import { setIsAuth, setAuth } from "./authSlice";
import { LoginResponse, LoginSend } from "../schemas/login.schema";
import { ApiBase } from "./../../shared/hooks/baseApi";

export const academicRequestsTags = ApiBase.enhanceEndpoints({
  addTagTypes: ["Auth"],
});

export const authApi = ApiBase.injectEndpoints({
  /**
   * @GET all student records by student-code
   */
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginSend>({
      query: (value) => ({ url: "auth/login", method: "POST", body: value }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("x-token", data.token);
          localStorage.setItem("roll", data.user.roll);
          localStorage.setItem("username", data.user.username);

          dispatch(setIsAuth(true));
          dispatch(setAuth(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
