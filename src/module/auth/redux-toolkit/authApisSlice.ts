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
      transformResponse: (response: { data: LoginResponse }) => {
        localStorage.setItem("x-token", response.data.token);
        return response.data;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
