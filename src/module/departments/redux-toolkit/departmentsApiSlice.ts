import { ApiBase } from "../../shared/hooks/baseApi";
import { Department } from "../schemas/department.schema";
export const deparmentRequestsTags = ApiBase.enhanceEndpoints({
  addTagTypes: ["Department"],
});

export const departmentsApi = deparmentRequestsTags.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query<Department[], void>({
      query: () => "/departments",
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Department", id })) : [],
    }),
  }),
  overrideExisting: false,
});

export const { useGetDepartmentsQuery } = departmentsApi;
