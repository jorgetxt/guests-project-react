import { ApiBase } from "./../../shared/hooks/baseApi";
export const academicRequestsTags = ApiBase.enhanceEndpoints({
  addTagTypes: ["Product"],
});

const extendedApi = ApiBase.injectEndpoints({
  /**
   * @GET all student records by student-code
   */
  endpoints: (build) => ({
    example: build.query({
      query: () => "test",
    }),
  }),
  overrideExisting: false,
});

export const { useExampleQuery } = extendedApi;
